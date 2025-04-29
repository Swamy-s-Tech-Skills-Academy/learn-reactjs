import { createGlobalStyle } from 'styled-components';

/**
 * Global styles using styled-components.
 * 
 * Note: This project uses both Tailwind CSS (via index.css) and styled-components.
 * This demonstrates how both styling approaches can coexist in the same project.
 * 
 * - Tailwind CSS is used for utility-based styling through className props
 * - styled-components is used for component-specific styling and global styles
 */

const GlobalStyle = createGlobalStyle`
  /* These styles complement Tailwind's base styles */
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    /* Additional styles that might be harder to achieve with Tailwind */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Example of targeting specific elements globally */
  a {
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: #3b82f6;
    }
  }

  /* Example of a global reset that would work alongside Tailwind */
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;