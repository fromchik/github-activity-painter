
import { NextRequest, NextResponse } from 'next/server';

interface CommitRequest {
  githubToken: string;
  username: string;
  email: string;
  cells: Array<{ date: string; level: number }>;
  year: number;
}

interface LogContext {
  timestamp: string;
  endpoint: string;
  username?: string;
  year?: number;
}

class Logger {
  private context: LogContext;

  constructor(context: Partial<LogContext>) {
    this.context = {
      timestamp: new Date().toISOString(),
      endpoint: '/api/commit',
      ...context
    };
  }

  info(message: string, data?: Record<string, unknown>) {
    console.log('ℹ️ [INFO]', {
      ...this.context,
      message,
      ...(data && { data })
    });
  }

  success(message: string, data?: Record<string, unknown>) {
    console.log('✅ [SUCCESS]', {
      ...this.context,
      message,
      ...(data && { data })
    });
  }

  warn(message: string, data?: Record<string, unknown>) {
    console.warn('⚠️ [WARNING]', {
      ...this.context,
      message,
      ...(data && { data })
    });
  }

  error(message: string, error: unknown, additionalData?: Record<string, unknown>) {
    const err = error as Error;
    console.error('❌ [ERROR]', {
      ...this.context,
      message,
      error: {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
      },
      ...(additionalData && { additionalData })
    });
  }
}

export async function POST(req: NextRequest) {
  const logger = new Logger({});
  
  try {
    logger.info('Received commit request');
    
    const body: CommitRequest = await req.json();
    const { githubToken, username, email, cells, year } = body;

    const contextLogger = new Logger({ username, year });

    if (!githubToken || !username || !email) {
      contextLogger.warn('Missing required fields', {
        hasToken: !!githubToken,
        hasUsername: !!username,
        hasEmail: !!email
      });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!githubToken.startsWith('ghp_') && !githubToken.startsWith('github_pat_')) {
      contextLogger.warn('Invalid token format');
      return NextResponse.json(
        { error: 'Invalid GitHub token format' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      contextLogger.warn('Invalid email format', { email });
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const paintedCells = cells.filter(c => c.level > 0);
    contextLogger.info('Processing painted cells', {
      totalCells: cells.length,
      paintedCells: paintedCells.length,
      totalCommits: paintedCells.reduce((sum, c) => sum + c.level, 0)
    });

    if (paintedCells.length === 0) {
      contextLogger.warn('No painted cells to commit');
      return NextResponse.json(
        { error: 'No painted cells found' },
        { status: 400 }
      );
    }

    const repoName = `github-activity-${year}`;
    contextLogger.info('Creating/checking repository', { repoName });
    
    const repo = await createRepository(githubToken, repoName, contextLogger);

    if (!repo) {
      contextLogger.error('Failed to create repository', new Error('Repository creation failed'));
      return NextResponse.json(
        { error: 'Failed to create repository. Check your token permissions.' },
        { status: 500 }
      );
    }

    contextLogger.success('Repository ready', { repoName });

    contextLogger.info('Starting commits creation');
    const results = await createCommits(
      githubToken,
      username,
      email,
      repoName,
      paintedCells,
      contextLogger
    );

    contextLogger.success('Commits process completed', {
      successful: results.success,
      failed: results.failed,
      total: results.success + results.failed
    });

    return NextResponse.json({
      success: true,
      message: `Created ${results.success} commits`,
      failed: results.failed,
      repoUrl: `https://github.com/${username}/${repoName}`,
      stats: {
        total: results.success + results.failed,
        successful: results.success,
        failed: results.failed
      }
    });

  } catch (error) {
    logger.error('Unexpected error in commit endpoint', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' 
          ? (error as Error).message 
          : undefined
      },
      { status: 500 }
    );
  }
}

async function createRepository(
  token: string, 
  repoName: string,
  logger: Logger
) {
  try {
    logger.info('Checking if repository exists', { repoName });
    
    const response = await fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        name: repoName,
        description: 'GitHub Activity Art - Created with GitHub Activity Painter',
        private: false,
        auto_init: true
      })
    });

    if (response.status === 422) {
      logger.info('Repository already exists', { repoName });
      return { name: repoName };
    }

    if (response.status === 401) {
      logger.error('Authentication failed', new Error('Invalid token'), {
        status: response.status
      });
      return null;
    }

    if (response.status === 403) {
      const errorData = await response.json();
      logger.error('Permission denied', new Error('Insufficient permissions'), {
        status: response.status,
        message: errorData.message
      });
      return null;
    }

    if (!response.ok) {
      const errorData = await response.json();
      logger.error('GitHub API error', new Error(response.statusText), {
        status: response.status,
        statusText: response.statusText,
        githubError: errorData
      });
      return null;
    }

    const repoData = await response.json();
    logger.success('Repository created successfully', { 
      repoName,
      repoUrl: repoData.html_url 
    });
    
    return repoData;
  } catch (error) {
    logger.error('Exception during repository creation', error, { repoName });
    return null;
  }
}

async function createCommits(
  token: string,
  username: string,
  email: string,
  repoName: string,
  cells: Array<{ date: string; level: number }>,
  logger: Logger
) {
  let success = 0;
  let failed = 0;
  const errors: Array<{ date: string; error: string }> = [];

  try {
    logger.info('Getting current branch reference');
    const refResponse = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/git/refs/heads/main`,
      {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );

    if (!refResponse.ok) {
      throw new Error('Failed to get branch reference');
    }

    const refData = await refResponse.json();
    let currentSha = refData.object.sha;
    logger.info('Current branch SHA', { sha: currentSha.substring(0, 7) });

    const sortedCells = [...cells].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    for (let cellIndex = 0; cellIndex < sortedCells.length; cellIndex++) {
      const cell = sortedCells[cellIndex];
      const { date, level } = cell;
      
      logger.info(`Processing cell ${cellIndex + 1}/${sortedCells.length}`, { 
        date, 
        level,
        commitsToCreate: level 
      });
      
      for (let i = 0; i < level; i++) {
        try {
          const commitDate = new Date(date + 'T00:00:00Z');
          const hoursInterval = Math.floor(24 / (level + 1));
          const hourOffset = hoursInterval * (i + 1);
          const minuteOffset = Math.floor(Math.random() * 30);
          
          commitDate.setUTCHours(hourOffset % 24);
          commitDate.setUTCMinutes(minuteOffset);
          const isoDate = commitDate.toISOString();

          const blobContent = `Activity on ${date} - Commit ${i + 1}/${level}\nGenerated at: ${new Date().toISOString()}`;
          const blobResponse = await fetch(
            `https://api.github.com/repos/${username}/${repoName}/git/blobs`,
            {
              method: 'POST',
              headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
              },
              body: JSON.stringify({
                content: blobContent,
                encoding: 'utf-8'
              })
            }
          );

          if (!blobResponse.ok) {
            throw new Error(`Blob creation failed: ${blobResponse.status}`);
          }

          const blobData = await blobResponse.json();
          const blobSha = blobData.sha;

          const filePath = `activity/${date}/${String(i).padStart(3, '0')}.txt`;
          const treeResponse = await fetch(
            `https://api.github.com/repos/${username}/${repoName}/git/trees`,
            {
              method: 'POST',
              headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
              },
              body: JSON.stringify({
                base_tree: currentSha,
                tree: [
                  {
                    path: filePath,
                    mode: '100644',
                    type: 'blob',
                    sha: blobSha
                  }
                ]
              })
            }
          );

          if (!treeResponse.ok) {
            throw new Error(`Tree creation failed: ${treeResponse.status}`);
          }

          const treeData = await treeResponse.json();
          const treeSha = treeData.sha;

          const commitResponse = await fetch(
            `https://api.github.com/repos/${username}/${repoName}/git/commits`,
            {
              method: 'POST',
              headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
              },
              body: JSON.stringify({
                message: `Activity for ${date}`,
                tree: treeSha,
                parents: [currentSha],
                author: {
                  name: username,
                  email: email,
                  date: isoDate
                },
                committer: {
                  name: username,
                  email: email,
                  date: isoDate
                }
              })
            }
          );

          if (!commitResponse.ok) {
            throw new Error(`Commit creation failed: ${commitResponse.status}`);
          }

          const commitData = await commitResponse.json();
          const newCommitSha = commitData.sha;

          const updateRefResponse = await fetch(
            `https://api.github.com/repos/${username}/${repoName}/git/refs/heads/main`,
            {
              method: 'PATCH',
              headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
              },
              body: JSON.stringify({
                sha: newCommitSha,
                force: false
              })
            }
          );

          if (!updateRefResponse.ok) {
            throw new Error(`Ref update failed: ${updateRefResponse.status}`);
          }

          currentSha = newCommitSha;
          success++;

          logger.info(`Commit created successfully`, {
            date,
            commitNumber: i + 1,
            totalForDate: level,
            commitTime: isoDate,
            sha: newCommitSha.substring(0, 7)
          });

          await new Promise(resolve => setTimeout(resolve, 150));

        } catch (error) {
          failed++;
          const errorMsg = (error as Error).message;
          errors.push({ date, error: errorMsg });
          
          logger.error(`Exception during commit creation`, error, {
            date,
            commitNumber: i + 1,
            level
          });
        }
      }
    }

    if (errors.length > 0) {
      logger.warn('Some commits failed', {
        totalErrors: errors.length,
        sampleErrors: errors.slice(0, 5)
      });
    }

    return { success, failed, errors };

  } catch (error) {
    logger.error('Fatal error in createCommits', error);
    return { success, failed, errors };
  }
}