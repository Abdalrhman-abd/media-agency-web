# Contributing to Media Agency Web

Thank you for your interest in contributing to Media Agency Web!

This document explains the basic guidelines that developers should follow when contributing to this project.

## 1. Getting Started

Before contributing, make sure you have installed:

- Node.js
- npm
- Git

Clone the repository:

```bash
git clone https://github.com/Abdalrhman-abd/media-agency-web.git
```

Navigate to the project directory:

```bash
cd media-agency-web
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 2. Development Workflow

Follow these steps when making changes:

1. Make sure your local project is up to date.
2. Create a new branch for your changes.
3. Make your changes.
4. Test your changes locally.
5. Check your code for linting errors.
6. Commit your changes with a clear message.

Example:

```bash
git checkout -b feature/your-feature-name
```

## 3. Code Style Guidelines

Please follow these conventions:

- Use PascalCase for React components and pages.
- Use camelCase for utility files and variables.
- Use reusable components whenever possible.
- Follow the existing project structure.
- Use relative imports.
- Keep components organized and easy to maintain.
- Avoid unnecessary code duplication.

## 4. Project Architecture

The project follows a feature-based architecture.

- `components/`: Shared UI and layout components.
- `features/`: Components and pages organized by feature.
- `routes/`: Application routing.
- `services/`: Service-related logic.
- `shared/`: Shared utilities and resources.
- `locales/`: Translation files.
- `types/`: Type definitions.
- `assets/`: Static assets.

## 5. Available Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start the development server  |
| `npm run build`   | Build the project             |
| `npm run lint`    | Check code for linting errors |
| `npm run format`  | Format project files          |
| `npm run preview` | Preview the production build  |
| `npm test`        | Run tests                     |

## 6. Testing

Before submitting changes:

- Run `npm run lint`.
- Run `npm run build`.
- Run `npm test` when test files are available.
- Check that the affected pages work correctly.

## 7. Commit Messages

Use clear and descriptive commit messages.

Examples:

```bash
git commit -m "feat: add new portfolio section"
git commit -m "fix: correct contact form validation"
git commit -m "docs: update project documentation"
```

## 8. Pull Requests

When submitting a pull request:

- Provide a clear title.
- Explain what you changed.
- Mention any related issues.
- Include screenshots when your changes affect the UI.
- Make sure the project builds successfully.

## 9. Questions

If you have questions about the project structure or development process, review the `README.md` file first.

Thank you for contributing!
