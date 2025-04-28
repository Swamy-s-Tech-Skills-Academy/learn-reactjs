# TypeScript Configuration Documentation

This document provides an overview of the TypeScript configuration used in the React Samples project, explaining key settings and their purpose. For a general project overview, see the [README](./README.md), or for Tailwind CSS configuration details, see the [Tailwind Configuration Guide](./tailwind-configuration.md).

## Configuration Structure

The project uses a multi-file TypeScript configuration approach:

- `tsconfig.json` - The root "solution" file that references other specific configuration files
- `tsconfig.app.json` - Contains settings specific to the application source code
- `tsconfig.node.json` - Contains settings specific to Node.js environments (build tools, etc.)

This separation allows for targeted configurations for different parts of the codebase.

## Root Configuration: tsconfig.json

The root configuration file mainly serves as a reference to other configuration files:

```json
{
  "compilerOptions": {
    "target": "es2022",
    "useDefineForClassFields": true,
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src", "./jest.setup.ts"],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## Application Configuration: tsconfig.app.json

This configuration contains settings for compiling the main application source code:

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2022",
    "useDefineForClassFields": true,
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

## Node Configuration: tsconfig.node.json

This configuration contains settings specific to Node.js environments, used by build tools:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

## Jest Configuration

This project uses Jest for testing with TypeScript. The configuration is managed through a dedicated `jest.config.ts` file at the root of the project.

### Jest Configuration File: jest.config.ts

```typescript
export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { useESM: true }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)']
};
```

### Key Configuration Options

- **testEnvironment**: Uses `jsdom` to simulate a browser-like environment for React component testing
- **transform**: Specifies how different file types should be transformed before testing
  - `ts-jest` with `useESM: true` handles TypeScript files with ESM support
- **moduleFileExtensions**: File extensions that Jest will recognize as modules
- **moduleNameMapper**: Maps import paths to mockable modules
  - CSS files are mocked with `identity-obj-proxy`
  - SVG files are handled with `jest-transformer-svg`
  - Path aliases starting with `@/` are mapped to the `src` directory
- **setupFilesAfterEnv**: Additional setup files that run after Jest is initialized
  - `jest.setup.ts` contains global test setup code and mocks
- **testMatch**: Patterns to detect test files
  - Files in `__tests__` folders
  - Files with `.test` or `.spec` extensions

### Jest Setup File: jest.setup.ts

The `jest.setup.ts` file contains global setup code for all tests:

- Imports `@testing-library/jest-dom` for DOM testing matchers
- Mocks browser APIs not available in JSDOM (e.g., `matchMedia`, `IntersectionObserver`)
- Suppresses certain console errors during testing
- Contains global setup and teardown hooks for all tests

## Key Configuration Options Explained

### Compilation Target and Language Features

- `target: "es2022"`: Specifies the ECMAScript version to compile to, supporting modern JavaScript features while ensuring compatibility.
- `lib: ["ES2023", "DOM", "DOM.Iterable"]`: Includes typings for ES2023 features and DOM APIs.
- `useDefineForClassFields: true`: Uses the ECMAScript standard behavior for class fields.

### Module Settings

- `module: "ESNext"`: Use the latest ECMAScript module syntax.
- `moduleResolution: "bundler"`: Optimized for bundlers like Vite, which handles module resolution.
- `esModuleInterop: true`: Enables better interoperability between CommonJS and ES modules.
- `resolveJsonModule: true`: Allows importing JSON files as modules.
- `isolatedModules: true`: Ensures that each file can be safely transpiled without relying on other imports.
- `allowImportingTsExtensions: true`: Allows imports with TypeScript-specific extensions (.ts, .tsx).

### TypeScript JSX Settings

- `jsx: "react-jsx"`: Uses the new JSX transform from React 17+ (doesn't require importing React in every file).

### Type Checking and Linting

- `strict: true`: Enables all strict type checking options.
- `noUnusedLocals: true`: Reports errors on unused local variables.
- `noUnusedParameters: true`: Reports errors on unused parameters.
- `noFallthroughCasesInSwitch: true`: Reports errors for fallthrough cases in switch statements.
- `noUncheckedSideEffectImports: true`: Warns about side effects in type imports.

### Build Performance

- `skipLibCheck: true`: Skip type checking of declaration files (.d.ts) for better performance.
- `noEmit: true`: Doesn't generate output files (Vite/build tools handle this).
- `tsBuildInfoFile`: Specifies a file to store incremental compilation information.

### References and Project Organization

- `references`: Links to other project configuration files, enabling project references.
- `composite: true`: Enables features needed for project references (in tsconfig.node.json).
- `include`: Specifies which files to include in the compilation.

## Best Practices

1. **Use Project References**: The multi-file approach with references improves build times by allowing incremental compilation and isolating different parts of the codebase.

2. **Target Modern JavaScript**: Using recent ECMAScript targets (`es2022`) allows for more modern JavaScript features.

3. **Balance Strictness and Productivity**: The strict settings help catch more errors but may require more explicit type annotations.

4. **Incremental Adoption**: TypeScript's configuration can be gradually adjusted as the project's needs evolve.

5. **Keep Configuration DRY**: The reference-based structure avoids duplicating common settings.

## Common Issues and Solutions

### Type Resolution Problems

If you encounter "Cannot find module" or similar errors:
- Check that the file is included in the `include` paths
- Verify that `moduleResolution` is correctly set
- Make sure `paths` mapping is correct if you're using path aliases

### Build Performance

If TypeScript checking is slow:
- Ensure `skipLibCheck` is true
- Consider using `incremental` compilation
- Use project references for large codebases

### JSX Issues

If JSX isn't being recognized properly:
- Confirm `jsx` is set to `react-jsx` 
- Ensure file extensions are .tsx for React components
- Verify React types are installed