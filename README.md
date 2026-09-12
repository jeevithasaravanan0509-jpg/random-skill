# 🎯 Random Skill

> Turn your free time into meaningful progress.

Random Skill is a micro-learning and skill-development platform designed to help users make productive use of short periods of free time.

Instead of endlessly scrolling through short-form content, users can discover a skill, enter a structured learning path, learn step-by-step, practice what they learn, and continue from exactly where they stopped.

---

## 💡 Why Random Skill?

People often have small pockets of free time but don't know what to do with them.

Random Skill addresses this by providing structured learning experiences that can be completed in short sessions.

The platform is built around a simple idea:

> Random Skill chooses the door. The user chooses how long they stay inside.

Randomness is used only when discovering a skill. Once a user chooses a learning path, the experience becomes structured and sequential.

---

## ✨ Key Features

### 🎲 Skill Discovery

- Discover different skills and learning paths
- Explore skills based on different categories
- Use the Surprise Me option to discover something new

### 📚 Structured Learning Paths

Each skill follows a logical learning structure:

Category → Skill → Learning Path → Chapter → Lesson → Practice → Completion

### 📖 Chapter-Based Learning

- Learn concepts step-by-step
- Chapters are unlocked sequentially
- Users can return to previous chapters
- Learning paths can be expanded with additional chapters

### 🧠 Practice

- Each chapter includes a practice activity
- Users receive immediate feedback
- Completing a chapter awards XP

### 💾 Progress Persistence

User progress is stored locally using browser localStorage.

The application remembers:

- Completed chapters
- Current chapter
- Learning path progress
- Total XP

Users can leave the application and return later without losing their progress on that browser.

### 📊 Progress Dashboard

Users can view:

- Total XP
- Completed chapters
- Overall learning progress
- Progress for individual learning paths

---

## 🗂️ Learning Paths

The current platform includes learning paths across multiple categories.

### Languages

- 🇯🇵 Japanese Foundation
- 🗣️ English Communication

### Programming & Technology

- 🧠 DSA Foundation
- 🐍 Python Programming
- 💻 C++ Programming
- 🌐 Web Development
- 🔀 Git & GitHub
- 🐳 Docker Fundamentals
- 🐧 Linux Fundamentals
- 🤖 AI Fundamentals

### Aptitude & Career

- 🔢 Quantitative Aptitude
- 🧩 Logical Reasoning
- 📄 Resume Fundamentals
- 🎤 Interview Fundamentals

### Thinking & Personal Development

- 🔎 Critical Thinking
- ⏰ Time Management
- 🧩 Brain Puzzles

The learning-path architecture is designed so that chapters can be expanded as the content grows.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| TypeScript | Type-safe development |
| Vite | Development and production build |
| CSS | Styling and responsive UI |
| Vitest | Automated testing |
| Oxlint | Code quality and linting |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Actions | Continuous Integration |
| Docker | Containerized production build |
| Nginx | Production web server inside Docker |
| Netlify | Public deployment |
| localStorage | Client-side progress persistence |

---

## 🏗️ Application Architecture

The application follows this learning flow:

Category
↓
Skill
↓
Learning Path
↓
Chapter
↓
Lesson
↓
Practice
↓
Completion
↓
Progress saved in localStorage

---

## 🔄 DevOps Workflow

The project follows a DevOps workflow:

VS Code
↓
Git
↓
GitHub
↓
GitHub Actions
↓
Automated Testing
↓
Production Build
↓
Docker Image Validation
↓
Netlify Deployment

---

## 📁 Project Structure

The main project structure is:

random-skill/
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
├── src/
│   ├── data/
│   │   └── learningPaths.ts
│   ├── utils/
│   │   ├── progress.ts
│   │   └── progress.test.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── .dockerignore
├── Dockerfile
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- Docker Desktop (optional, for Docker testing)

### 1. Clone the Repository

git clone https://github.com/jeevithasaravanan0509-jpg/random-skill.git

### 2. Enter the Project Directory

cd random-skill

### 3. Install Dependencies

npm install

### 4. Start the Development Server

npm run dev

The application will start using the Vite development server.

---

## 🧪 Testing

The project uses Vitest for automated testing.

Run:

npm run test

The tests cover the learning progress system, including:

- Initial progress
- Starting a learning path
- Chapter unlocking
- Chapter completion
- XP calculation
- Progress percentage
- Duplicate XP prevention

---

## 🔍 Linting

Oxlint is used for code-quality checks.

Run:

npm run lint

---

## 🏭 Production Build

To create a production build:

npm run build

The generated production files are placed inside the dist directory.

---

## 🐳 Docker

Random Skill can be built and served using Docker.

### Build the Docker Image

docker build -t random-skill .

### Run the Container

docker run -d -p 8080:80 --name random-skill-container random-skill

The application can then be accessed locally at:

http://localhost:8080

The Docker setup uses a multi-stage build:

Node.js
↓
React/Vite Production Build
↓
Nginx
↓
Production Application

---

## 🔄 Continuous Integration

GitHub Actions automatically validates changes pushed to the repository.

The CI workflow performs:

Push or Pull Request
↓
Install Dependencies
↓
Run Tests
↓
Build Application
↓
Build Docker Image

This helps ensure that changes do not break the application before deployment.

---

## ☁️ Deployment

The application is deployed using Netlify.

The Netlify project is connected to the GitHub repository.

When changes are pushed to the production branch:

VS Code
↓
git push
↓
GitHub
↓
Netlify detects the change
↓
npm run build
↓
New deployment
↓
Updated Random Skill application

This allows new features and learning content to be deployed automatically after pushing changes to GitHub.

---

## 💾 Data & Privacy

Random Skill currently does not require an external database or third-party API.

Learning progress is stored locally in the user's browser using localStorage.

The current version does not require API keys or external service credentials.

Progress stored on one device or browser is separate from progress stored on another device or browser.

---

## 🎯 Design Philosophy

Random Skill is intentionally different from short-form educational video platforms.

The goal is not:

Scroll → Watch → Scroll → Watch

Instead, the goal is:

Discover
↓
Choose
↓
Learn
↓
Practice
↓
Complete
↓
Continue Later

The platform focuses on structured learning rather than endless content consumption.

---

## 🔮 Future Enhancements

Potential future improvements include:

- More chapters for existing learning paths
- Additional learning paths and categories
- More interactive practice activities
- Improved progress analytics
- User accounts
- Cloud-based progress synchronization
- Cross-device progress
- Achievement and badge systems
- Personalized learning recommendations
- Backend/database integration
- Expanded assessment features

---

## 📌 Project Status

🚀 Active Development

The core learning-path system, progress tracking, practice flow, automated testing, Docker setup, CI workflow, and Netlify deployment are implemented.

The learning content will continue to expand with more chapters and deeper learning paths.

---

## 👩‍💻 Development Workflow

Random Skill is developed using a modern frontend and DevOps workflow:

React + TypeScript
↓
Git
↓
GitHub
↓
GitHub Actions
↓
Automated Testing & Build
↓
Docker Validation
↓
Netlify Deployment

---

## 📄 License

This project is developed as an academic and learning project.