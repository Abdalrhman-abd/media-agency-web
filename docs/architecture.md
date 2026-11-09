# Project Architecture

## Overview

Media Agency Web follows a Feature-Based Architecture.

This approach organizes the application into separate features, making the code easier to understand, maintain, and extend.

## Project Organization

The `src` directory contains the main application code.

### Main Directories

| Directory | Description |
|---|---|
| `components/` | Shared and reusable UI components |
| `features/` | Application features and their related pages |
| `routes/` | Application routing and navigation |
| `services/` | Service-related logic |
| `shared/` | Shared utilities and resources |
| `assets/` | Images, icons, and static assets |
| `locales/` | Translation resources |
| `types/` | TypeScript type definitions |

## Feature-Based Structure

Each feature has its own directory.

Current features include:

- `home/`
- `about/`
- `services/`
- `portfolio/`
- `contact/`
- `booking/`

Each feature keeps its related pages and components together.

## Shared Components

The `components/` directory contains reusable components.

### Layout

The `components/layout/` directory contains shared layout components, including:

- MainLayout
- Navbar
- Footer

### UI Components

The `components/ui/` directory contains reusable interface components, such as:

- Button
- Card
- Input
- Select
- Textarea

## Routing

The application uses React Router for navigation.

The main routing configuration is located in:

`src/routes/AppRoutes.tsx`

Pages are loaded using React lazy loading and Suspense.

This helps load page components when they are needed and displays a loading indicator while they are being loaded.

## Import Rules

The project currently uses relative import paths instead of path aliases.

Imports should reference the correct relative location of the target file.

## Technologies

The architecture uses:

- React
- React Router
- TypeScript and JavaScript
- Vite

## Future Improvements

Possible future improvements include:

- Backend integration.
- Completing multilingual support.
- Adding automated tests.
- Improving shared component organization.