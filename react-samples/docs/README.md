# React Interview Samples

This project contains a collection of React code samples built with TypeScript and Vite, specifically designed to help prepare for React technical interviews. It showcases various React patterns, components, and best practices that commonly appear in technical interviews.

## Interview Preparation Focus Areas

This repository covers:

- React fundamentals (components, props, state)
- Hooks (useState, useEffect, useContext, useRef, useMemo, useCallback)
- State management techniques
- Performance optimization
- Common coding challenges
- Component communication patterns
- Form handling and validation
- Testing React components

## Documentation Structure

This documentation folder contains:

- **README.md** (this file): Project overview and general information
- **[typescript-configuration.md](./typescript-configuration.md)**: Detailed explanation of TypeScript configuration
- **[tailwind-configuration.md](./tailwind-configuration.md)**: In-depth guide to Tailwind CSS integration
- **[styling-approaches.md](./styling-approaches.md)**: Comparison of Tailwind CSS and styled-components approaches

## Tailwind CSS Integration with Vite

For a detailed explanation of Tailwind CSS integration, please see the [Tailwind Configuration Guide](./tailwind-configuration.md).

This project demonstrates the proper way to integrate Tailwind CSS with a Vite React application. Here are the key points to understand:

### Correct Setup

1. **PostCSS Integration**: Tailwind CSS works with Vite through PostCSS, which is configured in `postcss.config.js`:

   ```js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   };
   ```

2. **No Vite Plugin Required**: Unlike some other CSS frameworks, Tailwind CSS doesn't require a dedicated Vite plugin. The following configuration in `vite.config.ts` is sufficient:

   ```js
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";

   export default defineConfig({
     plugins: [react()],
   });
   ```

3. **Tailwind Config**: Tailwind CSS is configured through `tailwind.config.js`, where you can customize themes, add plugins, and set content paths:

   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     // other configurations...
   };
   ```

4. **CSS Import**: Tailwind CSS is imported in your main CSS file (`src/index.css`):
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Common Mistakes to Avoid

- **Don't import non-existent packages**: There is no official `@tailwindcss/vite` package.
- **Don't add Tailwind as a Vite plugin**: Tailwind doesn't work as a direct Vite plugin.
- **Don't forget the PostCSS configuration**: Tailwind requires proper PostCSS setup to work.

### Advantages of This Approach

- **Simpler configuration**: Fewer moving parts means fewer potential points of failure.
- **Official method**: This is the approach recommended in the official Tailwind CSS documentation.
- **Better performance**: The PostCSS integration is optimized for efficiency.

## TypeScript Configuration

For a comprehensive guide to our TypeScript setup, please see the [TypeScript Configuration Guide](./typescript-configuration.md).

## Getting Started

### Prerequisites

- Node.js (version 16 or later)
- npm or yarn package manager

### Installation

1. Clone this repository
2. Navigate to the project directory:
   ```bash
   cd react-samples
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Manual Dependency Installation

If you're setting up the project from scratch or need to install specific dependency groups, you can use these commands:

#### Core Dependencies
```bash
# React ecosystem
npm install react@19 react-dom@19

# Font Awesome
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
```

#### Development Dependencies
```bash
# Build tools
npm install --save-dev vite @vitejs/plugin-react

# TypeScript and type definitions
npm install --save-dev typescript @types/react @types/react-dom

# CSS Processing
npm install --save-dev tailwindcss postcss autoprefixer

# Linting and code quality
npm install --save-dev eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh typescript-eslint globals

# Testing
npm install --save-dev jest ts-jest jest-environment-jsdom @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event identity-obj-proxy
```

#### All Dependencies in One Command
```bash
# Core dependencies
npm install react@19 react-dom@19 @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome

# Dev dependencies
npm install --save-dev vite @vitejs/plugin-react typescript @types/react @types/react-dom tailwindcss postcss autoprefixer eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh typescript-eslint globals jest ts-jest jest-environment-jsdom @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event identity-obj-proxy
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

The development server will start at `http://localhost:5173` by default.

## Project Structure

```
react-samples/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images, fonts, etc.
│   ├── components/    # Reusable components
│   │   ├── layout/    # Layout components (Sidebar, Navbar, Footer)
│   │   └── ...        # Other reusable components
│   ├── hooks/         # Custom hooks examples
│   ├── patterns/      # Common React patterns
│   ├── challenges/    # Interview coding challenges
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles with Tailwind
├── index.html         # HTML template with Inter font
└── ...configuration files
```

## Navigation and Routing Implementation

The project implements a dynamic navigation system with a responsive sidebar that adapts to the current route:

- **Sidebar Component**: The `Sidebar.tsx` component demonstrates:
  - Dynamic navigation based on the current URL path
  - Conditional rendering of navigation sections
  - Active link highlighting
  - Integration with Font Awesome icons
  - Responsive design with Tailwind CSS

- **Navigation Structure**: Navigation items are organized by categories:
  - React Fundamentals
  - React Hooks
  - React Patterns
  - Performance Optimization
  - Form Handling
  - Interview Challenges

This approach showcases best practices for implementing navigation in React applications with React Router.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Installed Packages

This project uses a variety of packages for development, UI, testing, and tooling. Here's a breakdown of all packages installed:

### Core Dependencies

- **React Ecosystem**
  - `react` (v19.0.0): The core React library with the latest features and improvements
  - `react-dom` (v19.0.0): React package for working with the DOM

- **Font Awesome Integration**
  - `@fortawesome/fontawesome-svg-core` (v6.7.2): Core library for Font Awesome
  - `@fortawesome/free-solid-svg-icons` (v6.7.2): Solid style icons from Font Awesome
  - `@fortawesome/free-regular-svg-icons` (v6.7.2): Regular style icons from Font Awesome
  - `@fortawesome/free-brands-svg-icons` (v6.7.2): Brand icons from Font Awesome
  - `@fortawesome/react-fontawesome` (v0.2.2): Font Awesome React component

### Development Dependencies

- **Build Tools**
  - `vite` (v6.3.1): Next generation frontend tooling for faster development
  - `@vitejs/plugin-react` (v4.3.4): Official React plugin for Vite

- **TypeScript and Type Definitions**
  - `typescript` (v5.7.2): TypeScript language support
  - `@types/react` (v19.0.10): TypeScript definitions for React
  - `@types/react-dom` (v19.0.4): TypeScript definitions for React DOM

- **CSS Processing**
  - `tailwindcss` (v3.4.17): Utility-first CSS framework
  - `postcss` (v8.5.3): Tool for transforming CSS with JavaScript plugins
  - `autoprefixer` (v10.4.21): PostCSS plugin to parse CSS and add vendor prefixes

- **Linting and Code Quality**
  - `eslint` (v9.22.0): Linting utility for JavaScript and TypeScript
  - `@eslint/js` (v9.22.0): ESLint's official JavaScript integration
  - `eslint-plugin-react-hooks` (v5.2.0): React hooks specific linting rules
  - `eslint-plugin-react-refresh` (v0.4.19): ESLint plugin for React Refresh
  - `typescript-eslint` (v8.26.1): TypeScript ESLint parser, plugin, and configs
  - `globals` (v16.0.0): Declare global variables for ESLint

- **Testing**
  - `jest` (v29.7.0): Delightful JavaScript testing framework
  - `ts-jest` (v29.1.2): TypeScript preprocessor for Jest
  - `jest-environment-jsdom` (v29.7.0): JSDOM environment for Jest
  - `@types/jest` (v29.5.12): TypeScript definitions for Jest
  - `@testing-library/react` (v15.0.0): Testing utilities for React
  - `@testing-library/jest-dom` (v6.4.0): Custom Jest matchers for DOM testing
  - `@testing-library/user-event` (v14.5.2): Simulates user events for testing
  - `identity-obj-proxy` (v3.0.0): Mock CSS modules for Jest

### Key Features of Our Package Configuration

1. **Modern React Development**: Using React 19, the latest version with improved performance and features

2. **TypeScript Integration**: Full TypeScript support for type safety and better developer experience

3. **Fast Build System**: Leveraging Vite's blazing-fast HMR and optimized build process

4. **Comprehensive Testing Suite**: Jest configured with React Testing Library for component testing

5. **Strong Linting**: ESLint setup with specialized plugins for React and TypeScript

6. **Utility-First CSS**: Tailwind CSS integration for rapid UI development

7. **Icon System**: Font Awesome integration for a comprehensive icon library

### Testing Configuration

The Jest testing setup includes:

- **Test Environment**: JSDOM for browser-like testing environment
- **TypeScript Support**: ts-jest for TypeScript processing in tests
- **File Matching**: Tests files with `.test.ts`, `.test.tsx`, `.spec.ts`, `.spec.tsx` or any files in `__tests__` directories
- **Module Mocking**: CSS and other asset imports are properly mocked
- **Setup File**: Global test setup in `jest.setup.ts`

Run tests with:
```bash
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - Code linting
- [Inter Font](https://fonts.google.com/specimen/Inter) - Modern sans-serif typeface

## Common Interview Topics Covered

- Component lifecycle and hooks
- State management (local state, context, reducers)
- Performance optimization (memoization, virtualization)
- Form handling and validation
- Async operations and data fetching
- Routing concepts
- Testing strategies
- Common React patterns

## About Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [SWC](https://swc.rs/) for Fast Refresh

## ESLint Configuration

// ...existing code...

## License

MIT
