import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faSearch, 
  faSpinner, 
  faCheck, 
  faTimes, 
  faInfoCircle, 
  faExclamationTriangle,
  faPlus,
  faMinus,
  faArrowRight,
  faArrowLeft,
  faHome,
  faCog,
  faBars,
  faUser,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

/**
 * Font Awesome Icon Library setup
 * 
 * This file configures the Font Awesome icon library for the entire app.
 * By adding icons here, they become available throughout the application
 * without needing to import them individually in each component.
 * 
 * Commonly used in interviews to demonstrate:
 * - App-wide configuration
 * - Utility modules
 * - Performance optimization by bundling icons
 */

// Add icons to the library
library.add(
  // Solid icons
  faSearch, 
  faSpinner, 
  faCheck, 
  faTimes, 
  faInfoCircle, 
  faExclamationTriangle,
  faPlus,
  faMinus,
  faArrowRight,
  faArrowLeft,
  faHome,
  faCog,
  faBars,
  faUser,
  faCode,
  
  // Brand icons
  faGithub,
  faLinkedin,
  faTwitter
);

// Export the configured library
export default library;