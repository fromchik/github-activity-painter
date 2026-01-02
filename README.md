# 🎨 GitHub Activity Painter

<div align="center">

<img src="./public/logo.png" alt="GitHub Activity Painter Logo" width="120" height="120">

# GitHub Activity Painter

**Turn your GitHub contribution graph into an artistic canvas**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Try_Now-blue?style=for-the-badge)](https://your-demo-url.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

**[🎯 Try It Now](https://your-demo-url.vercel.app) • [📖 Documentation](#-documentation) • [🚀 Quick Start](#-quick-start) • [💡 Examples](#-creative-examples)**

</div>

---

## ✨ What is GitHub Activity Painter?

**GitHub Activity Painter** is an intuitive, browser-based tool that transforms your GitHub contribution graph into a pixel art canvas. Create patterns, write messages, draw shapes, and express yourself creatively through your GitHub activity history—all without leaving your browser.

### 🎯 Perfect For

- **Developers** wanting to personalize their GitHub profiles
- **Job Seekers** looking to make their profiles memorable
- **Creative Coders** who love combining art with technology
- **Students** learning Git and having fun with commits
- **Anyone** who wants to add personality to their coding journey

---

## 🚀 Quick Start

### ⚡ 3-Minute Setup

1. **🌐 Visit**: Open the app in your browser
2. **🔑 Setup**: Enter your GitHub credentials (token, username, email)
3. **🎨 Paint**: Click and drag to create your masterpiece
4. **📤 Deploy**: Hit "Commit to GitHub" and watch it appear on your profile!

**First time?** Follow our [detailed setup guide](#-getting-your-github-token) below!

---

## 🌟 Key Features

### 🎨 **Intuitive Visual Editor**

- **Click & Drag Drawing**: Paint like using a digital canvas
- **5 Intensity Levels**: Match GitHub's native contribution levels (0-4)
- **Real-time Preview**: See your design exactly as it will appear
- **Future Date Protection**: Automatically prevents painting future dates
- **Smooth Interactions**: Responsive and fluid painting experience

### 🌓 **Theme Support**

- **Dark Mode**: Eye-friendly colors matching GitHub's dark theme
- **Light Mode**: Classic GitHub contribution colors
- **Auto-Switching**: Seamlessly adapts to system preferences
- **Consistent Colors**: Authentic GitHub color palettes

### 💾 **Smart Data Management**

- **Local Storage**: All data persists in your browser—100% privacy
- **JSON Export**: Save your designs for backup or sharing
- **JSON Import**: Load previously saved patterns
- **Multi-Year Support**: Create art for 2023, 2024, and 2025
- **Session Persistence**: Never lose your work while designing

### 🚀 **One-Click Deployment**

- **Direct GitHub Integration**: Commits go straight to your account
- **Automatic Repository**: Creates commits in your selected repo
- **Batch Processing**: Efficiently handles hundreds of commits
- **Progress Tracking**: Real-time feedback during deployment
- **Error Handling**: Clear messages if something goes wrong

### 📊 **Advanced Grid Controls**

- **Year Selector**: Switch between years instantly
- **Level Selector**: Change intensity on the fly
- **Bulk Clear**: Reset your canvas with one click
- **Cell Statistics**: Track painted cells and total commits
- **Week Labels**: Easy navigation with day and month markers

### 🎯 **User-Friendly Interface**

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Tooltips**: Helpful hints throughout the interface
- **Form Validation**: Prevents errors before submission
- **Toast Notifications**: Clear feedback for all actions
- **Minimal UI**: Focus on creativity, not clutter

---

## 🛠️ Technology Stack

<div align="center">

| Category       | Technology       | Purpose                    |
| -------------- | ---------------- | -------------------------- |
| **Framework**  | Next.js 15       | React framework with SSR   |
| **Language**   | TypeScript 5     | Type-safe development      |
| **Styling**    | Tailwind CSS 3   | Utility-first CSS          |
| **UI Library** | shadcn/ui        | Beautiful React components |
| **State**      | Zustand          | Lightweight state manager  |
| **Theme**      | next-themes      | Dark/light mode switching  |
| **Icons**      | Lucide React     | Beautiful icon library     |
| **Alerts**     | Sonner           | Toast notifications        |
| **Deployment** | Vercel/Netlify   | Serverless hosting         |

</div>

### 🏗️ Architecture Highlights

- **App Router**: Modern Next.js 15 with React Server Components
- **Client-Side State**: Zustand with persist middleware
- **Type Safety**: Full TypeScript coverage
- **Performance**: Optimized renders with React 19
- **Responsive**: Mobile-first design approach
- **Accessible**: Semantic HTML and ARIA labels

---

## 📸 Screenshots

<div align="center">

### 🖥️ Desktop Experience

![Desktop Interface](./docs/screenshots/desktop-main.png)

### 🎨 Painting in Action

![Painting Demo](./docs/screenshots/painting-demo.gif)

### 📱 Mobile Responsive

<img src="./docs/screenshots/mobile-view.png" alt="Mobile View" width="300">

### 🌓 Theme Switching

<img src="./docs/screenshots/dark-theme.png" alt="Dark Theme" width="400">
<img src="./docs/screenshots/light-theme.png" alt="Light Theme" width="400">

**[🎥 Watch Full Demo Video](#) →**

</div>

---

## 📚 Documentation

### 📖 Getting Your GitHub Token

To commit your artwork, you need a GitHub Personal Access Token:

1. **Navigate to GitHub Settings**
   - Go to [GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)

2. **Generate New Token**
   - Click "Generate new token (classic)"
   - Give it a descriptive name (e.g., "Activity Painter")

3. **Select Permissions**
   - ✅ Check `repo` (Full control of private repositories)
   - ℹ️ This allows the app to create commits

4. **Generate & Copy**
   - Click "Generate token" at the bottom
   - **⚠️ Copy immediately!** You won't see it again

5. **Security Best Practices**
   - Never share your token
   - Never commit it to a repository
   - The app stores it only in browser localStorage
   - Revoke tokens you're not using

### 🎨 How to Use

#### Step 1: Configure Your Account

Fill in the three input fields at the top:

```
🔑 GitHub Token:  ghp_xxxxxxxxxxxxxxxxxxxx
👤 Username:      yourusername
📧 Email:         your.email@example.com
```

**Why these fields?**
- **Token**: Authenticates commits to your account
- **Username**: Targets the correct GitHub profile
- **Email**: Associated with each commit

#### Step 2: Select Year

Choose which year you want to paint:
- 2023 (past year)
- 2024 (recent history)
- 2025 (current/future)

**💡 Tip**: Start with the current year for immediate visibility!

#### Step 3: Choose Intensity

Select your painting level (0-4):

| Level | Color (Dark) | Description      | Use Case          |
| ----- | ------------ | ---------------- | ----------------- |
| 0     | `#18181b`    | No activity      | Background/spaces |
| 1     | `#033a16`    | Low activity     | Subtle details    |
| 2     | `#196c2e`    | Medium activity  | Main shapes       |
| 3     | `#2ea043`    | High activity    | Highlights        |
| 4     | `#56d364`    | Intense activity | Maximum contrast  |

#### Step 4: Start Painting

**Mouse Controls:**
- **Single Click**: Paint one cell
- **Click & Drag**: Paint multiple cells continuously
- **Change Level**: Select different intensity anytime
- **Continue**: Paint over existing cells to change their level

**Keyboard Shortcuts:**
- `0-4`: Quickly switch intensity levels
- `Esc`: Stop current drawing action
- `Ctrl+Z`: Undo last action (coming soon!)

#### Step 5: Export or Commit

Once you're happy with your design:

**📤 Export JSON**
- Downloads a `.json` file with all painted cells
- Use for backup or sharing with others
- Can be imported later to continue editing

**🚀 Commit to GitHub**
- Validates your credentials
- Shows progress bar during upload
- Displays success message with commit count
- Check your GitHub profile to see results!

---

## 💡 Creative Examples

### 📝 Text Messages

Create messages that appear on your profile:

```
Examples:
- "HIRE ME" (7x53 grid)
- "2024" (7x20 grid)
- Your initials
- Short motivational words
```

### 🎨 Pixel Art

Draw creative designs:

```
Ideas:
- ❤️ Hearts and emojis
- ✓ Checkmarks and symbols
- 🎮 Retro game sprites
- 🏢 Company logos
- 🔤 Block letters
```

### 🌈 Patterns

Create abstract art:

```
Styles:
- Diagonal stripes
- Checkerboard patterns
- Gradient transitions
- Mountain landscapes
- Wave patterns
- QR codes (advanced!)
```

### 🎯 Pro Tips

**Maximize Visibility:**
- Use higher intensity levels (3-4) for main features
- Leave level 0 for background/spacing
- Create contrast between adjacent cells

**Planning Your Design:**
- Sketch on paper first (7 rows × 53 weeks)
- Remember: weeks flow left to right
- Days stack vertically (Sun-Sat)

**Best Practices:**
- Start with simple patterns
- Test with one week before full commit
- Keep designs readable from profile view
- Avoid overly complex details

---

## 🔧 Development

### Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/github-activity-painter.git
cd github-activity-painter

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3. Run development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:3000
```

### Project Structure

```
github-activity-painter/
├── app/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── sonner.tsx
│   │   ├── Cell.tsx         # Individual grid cell component
│   │   ├── PaintArea.tsx    # Main canvas grid
│   │   └── Navbar.tsx       # Top navigation bar
│   ├── store/
│   │   └── gridStore.ts     # Zustand state management
│   ├── api/
│   │   └── commit/
│   │       └── route.ts     # GitHub API endpoint
│   ├── lib/
│   │   ├── types.ts         # TypeScript interfaces
│   │   └── utils.ts         # Utility functions
│   ├── constants.ts         # App constants & palettes
│   ├── globals.css          # Global styles & CSS vars
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Home page component
├── public/
│   ├── logo.png
│   └── favicon.ico
├── docs/                    # Documentation files
├── .eslintrc.json
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### API Endpoints

#### POST `/api/commit`

Creates commits on GitHub based on painted cells.

**Request:**
```typescript
{
  githubToken: string;      // Personal access token
  username: string;         // GitHub username
  email: string;           // Commit author email
  cells: Array<{           // All grid cells
    date: string;          // ISO date (YYYY-MM-DD)
    level: number;         // 0-4
  }>;
  year: number;            // Target year
}
```

**Response (Success):**
```typescript
{
  success: true;
  stats: {
    successful: number;    // Commits created
    failed: number;        // Failed attempts
    total: number;         // Total processed
  }
}
```

**Response (Error):**
```typescript
{
  success: false;
  error: string;          // Error message
}
```

### State Management

```typescript
// Zustand Store Schema
interface GridStore {
  year: number;                          // Selected year
  cells: Cell[];                         // All grid cells
  currentLevel: number;                  // Selected intensity
  isDrawing: boolean;                    // Drawing state
  
  // Actions
  setYear: (year: number) => void;
  setCellLevel: (date: string, level?: number) => void;
  cycleCell: (date: string) => void;
  clear: () => void;
  setDrawing: (drawing: boolean) => void;
  setCurrentLevel: (level: number) => void;
  importJson: (data: Cell[]) => void;
  paintCells: (dates: string[]) => void;
}
```

### Key Utilities

```typescript
// Date Utilities
startOfYear(year: number): Date
addDays(date: Date, days: number): Date
formatISO(date: Date): string
generateDatesForYear(year: number): string[]
isFutureDate(date: string): boolean

// Grid Utilities
initialCells(year: number): Cell[]
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/github-activity-painter)

```bash
# Using Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

```bash
# Using Netlify CLI
npm i -g netlify-cli
netlify deploy --prod
```

### Environment Variables

**None required!** 🎉 All configuration is client-side for maximum privacy.

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🌟 Ways to Contribute

| Type         | Description                         | Good For     |
| ------------ | ----------------------------------- | ------------ |
| 🐛 Bug Fix   | Fix issues and improve stability    | All levels   |
| ✨ Feature   | Add new functionality               | Intermediate |
| 📝 Docs      | Improve documentation               | Beginners    |
| 🎨 Design    | Enhance UI/UX                       | Designers    |
| 🧪 Testing   | Write tests and improve quality     | QA focused   |
| 🌍 i18n      | Add translations                    | Multilingual |

### 🚀 Getting Started

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/github-activity-painter.git
cd github-activity-painter

# 3. Create a feature branch
git checkout -b feature/amazing-feature

# 4. Install dependencies
npm install

# 5. Make your changes
# ... edit files ...

# 6. Test your changes
npm run dev
npm run build

# 7. Commit with conventional commits
git commit -m 'feat: add amazing feature'

# 8. Push to your fork
git push origin feature/amazing-feature

# 9. Open a Pull Request
```

### 📋 Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: fix bug in grid rendering
docs: update README
style: format code with prettier
refactor: restructure state management
test: add unit tests for utils
chore: update dependencies
```

### ✅ Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] All tests pass (`npm run test`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation updated if needed
- [ ] Commits follow conventional format
- [ ] PR description explains changes clearly

**First-time contributor?** Look for [`good first issue`](https://github.com/yourusername/github-activity-painter/labels/good%20first%20issue) labels!

---

## 🏆 Community

### 🌟 Contributors

Thanks to all amazing people who make this project better!

<a href="https://github.com/yourusername/github-activity-painter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=yourusername/github-activity-painter" />
</a>

### 💬 Get Help

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/github-activity-painter/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/yourusername/github-activity-painter/discussions)
- 📖 **Documentation**: This README and inline code comments
- 💬 **Questions**: Use [GitHub Discussions Q&A](https://github.com/yourusername/github-activity-painter/discussions/categories/q-a)

### 🎯 Show Your Support

If this project helps you create amazing GitHub art:

- ⭐ **Star** this repository
- 🐛 **Report bugs** you encounter
- 💡 **Share ideas** for new features
- 🎨 **Share** your creations on social media with `#GitHubActivityPainter`
- 🤝 **Contribute** code, docs, or designs
- 💝 **Sponsor** the project (coming soon!)

---

## 📊 Project Stats

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/yourusername/github-activity-painter?style=social)
![GitHub Forks](https://img.shields.io/github/forks/yourusername/github-activity-painter?style=social)
![GitHub Issues](https://img.shields.io/github/issues/yourusername/github-activity-painter)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/yourusername/github-activity-painter)
![GitHub Last Commit](https://img.shields.io/github/last-commit/yourusername/github-activity-painter)

</div>

---

## ⚠️ Important Disclaimers

### GitHub Usage

This tool creates **real commits** to your GitHub account. Please note:

- ✅ Use on personal or test repositories
- ✅ Understand commits are permanent in Git history
- ⚠️ Excessive automated activity may trigger GitHub's rate limits
- ⚠️ Use responsibly - don't spam or abuse the platform
- ⚠️ This is for educational and creative purposes only

**Always follow [GitHub's Terms of Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service) and [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies).**

### Privacy & Security

- 🔒 Your GitHub token is stored **only** in browser localStorage
- 🔒 No data is sent to external servers (except GitHub API)
- 🔒 All processing happens client-side in your browser
- 🔒 Source code is open and auditable
- ⚠️ Never share your personal access token
- ⚠️ Revoke unused tokens regularly

---

## 🗺️ Roadmap

### 🚧 In Progress

- [ ] Undo/Redo functionality (Ctrl+Z / Ctrl+Y)
- [ ] Keyboard shortcuts for faster workflow
- [ ] Import from existing GitHub activity

### 🔮 Planned Features

- [ ] **Templates Gallery**: Pre-made patterns to get started
- [ ] **Pattern Sharing**: Share your designs with community
- [ ] **Animation Preview**: See how commits appear over time
- [ ] **Multi-Select Tool**: Select and paint areas faster
- [ ] **Copy/Paste Sections**: Duplicate parts of your design
- [ ] **Auto-Save**: Periodic backup to prevent data loss
- [ ] **Mobile Optimization**: Better touch controls
- [ ] **Collaborative Editing**: Work on designs together
- [ ] **Pattern Marketplace**: Browse and download community patterns

### 💭 Ideas for Future

- Advanced drawing tools (line, rectangle, fill)
- Custom color palettes
- Export as image (PNG/SVG)
- Integration with GitHub CLI
- VS Code extension
- Desktop app (Electron)
- Mobile apps (React Native)

**Have an idea?** [Share it in Discussions](https://github.com/yourusername/github-activity-painter/discussions/categories/ideas)!

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for full details.

### 🔓 What This Means

```
✅ Commercial use     - Use in commercial projects
✅ Modification       - Change and adapt the code
✅ Distribution       - Share your modified versions
✅ Private use        - Use for personal projects
❗ License notice     - Include the original license
❗ Liability          - No warranty provided
```

**TL;DR**: You can do almost anything with this code! Just keep the license notice.

---

## 🙏 Acknowledgments

### Built With Love Using

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications

### Inspired By

- GitHub's contribution graph design
- Pixel art communities
- Creative coding enthusiasts
- Open source contributors worldwide

### Special Thanks

- To everyone who stars ⭐ this project
- Contributors who improve the codebase
- Users who share their creative designs
- The amazing open source community

---

<div align="center">

## 🎨 Ready to Paint Your GitHub Profile?

**Transform your contribution graph into art today!**

[![Start Creating](https://img.shields.io/badge/🚀_Start_Creating_Now-Try_Free-blue?style=for-the-badge)](https://your-demo-url.vercel.app)

---

**Built with ❤️ by [Your Name](https://github.com/yourusername) and [contributors](https://github.com/yourusername/github-activity-painter/graphs/contributors)**

_Making GitHub profiles more expressive, one pixel at a time._

**[🎯 Get Started](https://your-demo-url.vercel.app) • [📖 Learn More](#-documentation) • [🤝 Contribute](#-contributing) • [💬 Discuss](https://github.com/yourusername/github-activity-painter/discussions)**

---

<sub>If you found this helpful, consider giving it a ⭐ star!</sub>

</div>