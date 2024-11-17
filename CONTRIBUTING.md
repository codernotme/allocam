# Contributing to Allocam

Thank you for taking the time to contribute to Allocam! This guide will help you set up, follow best practices, and collaborate effectively.

---

## Table of Contents

1. [How to Contribute](#how-to-contribute)
2. [Setting Up the Project](#setting-up-the-project)
3. [Development Guidelines](#development-guidelines)
4. [Reporting Issues](#reporting-issues)
5. [Submitting Changes](#submitting-changes)
6. [Code of Conduct](#code-of-conduct)

---

## How to Contribute

We welcome contributions in the following ways:
- **Bug Reports**: If you find an issue, report it in the [Issues](https://github.com/codernotme/allocam/issues) section.
- **Feature Requests**: Have an idea? Open an issue describing your feature suggestion.
- **Code Contributions**: Fix bugs, add features, or improve performance.

---

## Setting Up the Project

### 1. Prerequisites
- **Node.js**: Ensure you have Node.js installed (preferably version 16 or later).
- **Package Manager**: Use `npm` (bundled with Node.js) or `yarn` for dependency management.

### 2. Clone and Install
1. Fork and clone the repository:
   ```bash
   git clone https://github.com/codernotme/allocam.git
   cd allocam
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### 3. Running the Development Server
- Start the development server with Vite:
  ```bash
  npm run dev
  ```
- Open `http://localhost:5173` to view the application.

---

## Development Guidelines

1. **Code Style**: Use consistent coding practices. If the project uses a linter (e.g., ESLint), ensure your code passes all checks:
   ```bash
   npm run lint
   ```
2. **Commit Messages**: Write meaningful commit messages:
   ```
   feat: add new event allocation feature
   fix: resolve resource assignment bug
   ```
3. **Testing**: Run tests before submitting changes (add this if applicable):
   ```bash
   npm test
   ```
4. **Branching**: Create branches for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## Reporting Issues

When reporting an issue:
1. Check the [Issues](https://github.com/codernotme/allocam/issues) page to see if it’s already reported.
2. Provide the following details:
   - Steps to reproduce.
   - Expected vs. actual results.
   - Screenshots or logs, if relevant.

---

## Submitting Changes

1. Ensure your branch is up-to-date with the main branch:
   ```bash
   git fetch origin
   git rebase origin/main
   ```
2. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```
3. Open a Pull Request:
   - Go to your fork and click **New Pull Request**.
   - Fill out the PR template and describe your changes in detail.

---

## Code of Conduct

All contributors are expected to adhere to the [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful and inclusive in all interactions.
