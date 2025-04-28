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
│   ├── hooks/         # Custom hooks examples
│   ├── patterns/      # Common React patterns
│   ├── challenges/    # Interview coding challenges
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles with Tailwind
├── index.html         # HTML template with Inter font
└── ...configuration files
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

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
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ESLint Configuration

// ...existing code...

## License

MIT
