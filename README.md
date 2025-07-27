# ResumeIQ - AI-Powered Resume Analyzer

<div align="center">
  <img src="public/readme/hero.webp" alt="ResumeIQ Banner" width="800">
  
  <div style="margin: 20px 0;">
    <img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
    <img alt="Puter.js" src="https://img.shields.io/badge/Puter.js-181758?style=for-the-badge&logoColor=white">
  </div>

  <h3>Intelligent Resume Analysis with AI-Powered Insights</h3>
  <p>Transform your job application process with smart resume evaluation, ATS scoring, and personalized feedback.</p>
</div>

---

## 📋 Table of Contents

1. [🎯 Overview](#-overview)
2. [✨ Features](#-features)
3. [🛠️ Tech Stack](#️-tech-stack)
4. [� Getting Started](#-getting-started)
5. [📁 Project Structure](#-project-structure)
6. [� Configuration](#-configuration)
7. [🎨 UI Components](#-ui-components)
8. [� Responsive Design](#-responsive-design)
9. [� Security & Privacy](#-security--privacy)
10. [🤝 Contributing](#-contributing)
11. [📄 License](#-license)

---

## 🎯 Overview

**ResumeIQ** is a cutting-edge, AI-powered resume analysis platform that helps job seekers optimize their resumes for better career opportunities. Built with modern web technologies, it provides comprehensive feedback, ATS compatibility scores, and actionable insights to improve your chances of landing your dream job.

### Why ResumeIQ?

- **AI-Driven Analysis**: Leverages advanced AI models to provide intelligent resume evaluation
- **ATS Optimization**: Ensures your resume passes Applicant Tracking Systems
- **Real-time Feedback**: Get instant, actionable suggestions for improvement
- **Modern Interface**: Clean, intuitive design for seamless user experience
- **Secure & Private**: Your data stays protected with client-side processing
- **Zero Setup**: No backend required - everything runs in your browser

---

## ✨ Features

### 🔐 **Authentication & User Management**
- **Browser-based Authentication**: Secure login system using Puter.js
- **No Backend Required**: Complete authentication handled client-side
- **Session Management**: Persistent user sessions across browser tabs
- **Privacy-First**: No personal data stored on external servers

### 📄 **Resume Management**
- **Multiple Format Support**: Upload PDF resumes with ease
- **Cloud Storage**: Secure resume storage using Puter.js file system
- **Resume Gallery**: View all your uploaded resumes in one place
- **Version Control**: Keep track of different resume versions
- **Quick Preview**: Instant resume preview with image conversion

### 🤖 **AI-Powered Analysis**
- **Smart Evaluation**: Advanced AI models analyze resume content
- **ATS Compatibility**: Check how well your resume performs with ATS systems
- **Scoring System**: Comprehensive scoring from 0-100
- **Custom Feedback**: Personalized suggestions for improvement
- **Job Matching**: Tailor analysis based on specific job descriptions

### 📊 **Analytics & Insights**
- **Visual Score Display**: Beautiful circular progress indicators
- **Detailed Breakdowns**: Section-by-section analysis
- **Improvement Suggestions**: Actionable recommendations
- **Trend Analysis**: Track your resume performance over time
- **Export Options**: Download reports and insights

### 🎨 **Modern UI/UX**
- **Responsive Design**: Perfect experience on all devices
- **Glass Morphism**: Modern, translucent design elements
- **Smooth Animations**: Engaging micro-interactions
- **Dark/Light Modes**: Adaptive color schemes
- **Accessibility**: WCAG compliant design
- **Progressive Enhancement**: Works even with JavaScript disabled

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **[React 19](https://react.dev/)** - Latest React with improved performance and new features
- **[React Router v7](https://reactrouter.com/)** - Advanced routing with nested routes and data loading
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development with excellent IntelliSense

### **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid development
- **[Custom CSS](./app/app.css)** - Enhanced animations and glass morphism effects
- **[Inter & Poppins](https://fonts.google.com/)** - Professional typography

### **Build Tools & Development**
- **[Vite](https://vite.dev/)** - Lightning-fast build tool with HMR
- **[ESLint](https://eslint.org/)** - Code linting for consistent style
- **[Prettier](https://prettier.io/)** - Code formatting for clean codebase

### **Backend & Services**
- **[Puter.js](https://puter.com/)** - Complete serverless platform for auth, storage, and AI
- **[Puter AI](https://docs.puter.com/api/ai)** - AI models for resume analysis
- **[Puter KV](https://docs.puter.com/api/kv)** - Key-value storage for user data
- **[Puter FS](https://docs.puter.com/api/fs)** - File system for resume storage

### **State Management**
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management
- **React Hooks** - Built-in state management for components

### **File Processing**
- **[PDF.js](https://mozilla.github.io/pdf.js/)** - PDF rendering and conversion
- **[Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)** - Image generation from PDFs
- **[React Dropzone](https://react-dropzone.js.org/)** - Drag-and-drop file uploads

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v18.0.0 or higher)
- **[npm](https://www.npmjs.com/)** (v8.0.0 or higher)
- **[Git](https://git-scm.com/)** (latest version)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Simba26git/resumeIQ.git
   cd resumeIQ
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run typecheck    # Run TypeScript type checking
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Deployment
npm start           # Start production server
```

---

## 📁 Project Structure

```
resumeiq/
├── app/                          # Main application code
│   ├── components/               # Reusable React components
│   │   ├── Accordion.tsx         # Collapsible content sections
│   │   ├── ATS.tsx              # ATS score display
│   │   ├── Details.tsx          # Resume detail views
│   │   ├── FileUploader.tsx     # Drag-and-drop file upload
│   │   ├── Navbar.tsx           # Navigation component
│   │   ├── ResumeCard.tsx       # Resume preview cards
│   │   ├── ScoreBadge.tsx       # Score indicator badges
│   │   ├── ScoreCircle.tsx      # Circular progress indicators
│   │   ├── ScoreGauge.tsx       # Advanced score visualization
│   │   └── Summary.tsx          # Analysis summary display
│   ├── lib/                     # Utility functions and helpers
│   │   ├── pdf2img.ts           # PDF to image conversion
│   │   ├── puter.ts             # Puter.js integration
│   │   └── utils.ts             # General utility functions
│   ├── routes/                  # Application routes
│   │   ├── auth.tsx             # Authentication page
│   │   ├── home.tsx             # Dashboard/home page
│   │   ├── resume.tsx           # Individual resume view
│   │   ├── upload.tsx           # Resume upload page
│   │   └── wipe.tsx             # Data cleanup utility
│   ├── app.css                  # Global styles and animations
│   ├── root.tsx                 # Application root component
│   └── routes.ts                # Route configuration
├── constants/                   # Application constants
│   └── index.ts                 # Shared constants and configs
├── public/                      # Static assets
│   ├── icons/                   # SVG icons and graphics
│   ├── images/                  # Images and illustrations
│   └── favicon.ico              # Application favicon
├── types/                       # TypeScript type definitions
│   ├── index.d.ts               # General type definitions
│   └── puter.d.ts               # Puter.js type definitions
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── react-router.config.ts       # React Router configuration
└── README.md                    # Project documentation
```

---

## 🔧 Configuration

### Environment Setup

The application uses Puter.js which doesn't require environment variables for basic functionality. However, you can customize behavior through:

### Puter Configuration
```typescript
// app/lib/puter.ts
const puterConfig = {
  // Add custom Puter.js configuration
  env: 'production', // or 'development'
  // Additional settings...
};
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [],
};
```

---

## 🎨 UI Components

### Design System

ResumeIQ uses a consistent design system with:

- **Color Palette**: Gradient-based with indigo, purple, and pink accents
- **Typography**: Inter and Poppins fonts for modern readability
- **Spacing**: 8px grid system for consistent layouts
- **Shadows**: Layered shadows for depth and hierarchy
- **Animations**: Smooth transitions and micro-interactions

### Component Library

#### Navigation Components
- `Navbar` - Main navigation with logo and upload button
- `BackButton` - Contextual navigation helper

#### Data Display
- `ResumeCard` - Preview cards with hover effects
- `ScoreCircle` - Animated circular progress indicators
- `ScoreBadge` - Compact score displays
- `Summary` - Comprehensive analysis summaries

#### Input Components
- `FileUploader` - Drag-and-drop with visual feedback
- Form inputs with enhanced styling and validation

#### Layout Components
- `Accordion` - Collapsible content sections
- Grid layouts for responsive design
- Modal overlays for focused interactions

---

## 📱 Responsive Design

ResumeIQ is fully responsive across all device sizes:

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Mobile-First Approach
- Progressive enhancement from mobile base
- Touch-friendly interface elements
- Optimized performance for mobile devices
- Accessible navigation patterns

---

## 🔒 Security & Privacy

### Data Protection
- **Client-Side Processing**: Resume analysis happens in your browser
- **Encrypted Storage**: All data encrypted using Puter.js security
- **No Data Mining**: Your resumes and personal information stay private
- **GDPR Compliant**: Full control over your data

### Security Features
- **Secure Authentication**: OAuth-based login system
- **File Type Validation**: Only safe file types accepted
- **Size Limits**: Reasonable file size restrictions
- **Input Sanitization**: All user inputs properly sanitized

---

## 🤝 Contributing

We welcome contributions to ResumeIQ! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Contribution Guidelines
- Follow TypeScript best practices
- Maintain consistent code style
- Add tests for new features
- Update documentation as needed
- Ensure responsive design compatibility

### Areas for Contribution
- Additional AI analysis features
- New UI components and animations
- Performance optimizations
- Accessibility improvements
- Documentation enhancements

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ by the Bytecraft team</p>
  <p>© 2025 Bytecraft. All rights reserved.</p>
</div>
