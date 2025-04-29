// filepath: d:\STSA\learn-reactjs\react-samples\src\components\layout\Sidebar.tsx
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faCog, 
  faPuzzlePiece, 
  faRocket, 
  faList, 
  faLaptop,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

// Define the navigation structure for each section
const navigationItems = {
  fundamentals: [
    { name: 'Component Types', path: '/fundamentals/types', icon: faCode },
    { name: 'Props & State', path: '/fundamentals/props-state', icon: faCode },
    { name: 'Conditional Rendering', path: '/fundamentals/conditional-rendering', icon: faCode },
    { name: 'Lists & Keys', path: '/fundamentals/lists-keys', icon: faCode },
  ],
  hooks: [
    { name: 'useState', path: '/hooks/use-state', icon: faCog },
    { name: 'useEffect', path: '/hooks/use-effect', icon: faCog },
    { name: 'useContext', path: '/hooks/use-context', icon: faCog },
    { name: 'useMemo & useCallback', path: '/hooks/use-memo-callback', icon: faCog },
    { name: 'Custom Hooks', path: '/hooks/custom-hooks', icon: faCog },
  ],
  patterns: [
    { name: 'Render Props', path: '/patterns/render-props', icon: faPuzzlePiece },
    { name: 'HOC (Higher Order Components)', path: '/patterns/hoc', icon: faPuzzlePiece },
    { name: 'Compound Components', path: '/patterns/compound-components', icon: faPuzzlePiece },
    { name: 'Context + Reducer', path: '/patterns/context-reducer', icon: faPuzzlePiece },
  ],
  performance: [
    { name: 'Memoization', path: '/performance/memoization', icon: faRocket },
    { name: 'Code Splitting', path: '/performance/code-splitting', icon: faRocket },
    { name: 'Virtualization', path: '/performance/virtualization', icon: faRocket },
    { name: 'React.memo', path: '/performance/react-memo', icon: faRocket },
  ],
  forms: [
    { name: 'Controlled Components', path: '/forms/controlled-components', icon: faList },
    { name: 'Form Validation', path: '/forms/validation', icon: faList },
    { name: 'Custom Form Hooks', path: '/forms/custom-hooks', icon: faList },
  ],
  challenges: [
    { name: 'To-Do List', path: '/challenges/todo-list', icon: faLaptop },
    { name: 'Infinite Scroll', path: '/challenges/infinite-scroll', icon: faLaptop },
    { name: 'Debounced Search', path: '/challenges/debounced-search', icon: faLaptop },
    { name: 'Modal Dialog', path: '/challenges/modal-dialog', icon: faLaptop },
  ],
};

// Map URLs to their respective section names
const pathToSection = {
  '/fundamentals': 'fundamentals',
  '/components': 'fundamentals', // For backward compatibility
  '/hooks': 'hooks',
  '/patterns': 'patterns',
  '/performance': 'performance',
  '/forms': 'forms',
  '/challenges': 'challenges',
};

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  
  useEffect(() => {
    // Determine which section is active based on the URL
    const path = location.pathname;
    
    // Find matching section by checking if path starts with any of our section paths
    const section = Object.entries(pathToSection).find(([prefix]) => 
      path.startsWith(prefix)
    );
    
    if (section) {
      setCurrentSection(section[1]);
    } else {
      setCurrentSection(null);
    }
  }, [location]);
  
  // If no section is active or we're on the home page, don't show the sidebar
  if (!currentSection || location.pathname === '/') {
    return null;
  }
  
  // Get the navigation items for the current section
  const items = navigationItems[currentSection as keyof typeof navigationItems] || [];
  
  // Get section title for the sidebar header
  const getSectionTitle = () => {
    switch (currentSection) {
      case 'fundamentals':
        return 'React Fundamentals';
      case 'hooks':
        return 'React Hooks';
      case 'patterns':
        return 'React Patterns';
      case 'performance':
        return 'Performance Optimization';
      case 'forms':
        return 'Form Handling';
      case 'challenges':
        return 'Interview Challenges';
      default:
        return '';
    }
  };
  
  return (
    <aside className={`w-64 bg-white shadow-sm ${className}`}>
      <div className="h-full overflow-y-auto">
        <div className="px-4 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">{getSectionTitle()}</h2>
        </div>
        <nav className="mt-3 px-3">
          <ul className="space-y-1">
            {items.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center px-3 py-2 text-sm font-medium rounded-md
                      ${isActive 
                        ? 'bg-indigo-50 text-indigo-600' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }
                    `}
                  >
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className={`mr-3 h-4 w-4 ${isActive ? 'text-indigo-500' : 'text-gray-400'}`} 
                    />
                    <span className="truncate">{item.name}</span>
                    {isActive && (
                      <FontAwesomeIcon 
                        icon={faChevronRight} 
                        className="ml-auto h-3 w-3 text-indigo-500" 
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;