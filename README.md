# 🎨 GitHub Activity Painter

<div align="center">

<img src="./public/logo.png" alt="GitHub Activity Painter Logo" width="120" height="120">

# GitHub Activity Painter

**Turn your GitHub contribution graph into an artistic canvas**

[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

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


</div>


---

## 📸 Screenshots

<div align="center">

### 🖥️ Desktop Experience

![Desktop Interface](./docs/screenshots/desktop-main.png)

### 🎨 Painting in Action

![Painting Demo](./docs/screenshots/painting-demo.gif)

### 🌓 Theme Switching

<img src="./docs/screenshots/dark-theme.png" alt="Dark Theme" width="400">
<img src="./docs/screenshots/light-theme.png" alt="Light Theme" width="400">


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
- 2023 
- 2024
- 2025 

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
