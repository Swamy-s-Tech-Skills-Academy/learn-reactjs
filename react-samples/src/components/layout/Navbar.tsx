import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, 
  faCog, 
  faPuzzlePiece, 
  faRocket, 
  faList, 
  faLaptop,
  faRightToBracket 
} from '@fortawesome/free-solid-svg-icons';
import reactLogo from '../../assets/react.svg';

interface NavbarProps {
  theme?: 'blue' | 'green' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'default';
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'default' }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>('home');

  // Navigation menu items
  const menuItems = [
    { id: 'home', label: 'Home', icon: faReact, path: '/' },
    { id: 'fundamentals', label: 'Fundamentals', icon: faCode, path: '/components' },
    { id: 'hooks', label: 'Hooks', icon: faCog, path: '/hooks' },
    { id: 'patterns', label: 'Patterns', icon: faPuzzlePiece, path: '/patterns' },
    { id: 'performance', label: 'Performance', icon: faRocket, path: '/performance' },
    { id: 'forms', label: 'Forms', icon: faList, path: '/forms' },
    { id: 'challenges', label: 'Challenges', icon: faLaptop, path: '/challenges' }
  ];

  // Tailwind CSS color theme classes based on the theme prop
  const getThemeClasses = () => {
    switch (theme) {
      // Blues
      case 'blue':
        return 'bg-blue-400 text-white shadow-lg';
      case 'sky':
        return 'bg-sky-400 text-white shadow-lg';
      case 'indigo':
        return 'bg-indigo-400 text-white shadow-lg';
        
      // Purples
      case 'violet':
        return 'bg-violet-400 text-white shadow-lg';
      case 'purple':
        return 'bg-purple-400 text-white shadow-lg';
      case 'fuchsia':
        return 'bg-fuchsia-400 text-white shadow-lg';
        
      // Pinks
      case 'pink':
        return 'bg-pink-400 text-white shadow-lg';
      case 'rose':
        return 'bg-rose-400 text-white shadow-lg';
        
      // Reds & Oranges
      case 'red':
        return 'bg-red-400 text-white shadow-lg';
      case 'orange':
        return 'bg-orange-400 text-white shadow-lg';
        
      // Yellows
      case 'amber':
        return 'bg-amber-400 text-white shadow-lg';
      case 'yellow':
        return 'bg-yellow-400 text-white shadow-lg';
        
      // Greens
      case 'lime':
        return 'bg-lime-400 text-white shadow-lg';
      case 'green':
        return 'bg-green-400 text-white shadow-lg';
      case 'emerald':
        return 'bg-emerald-400 text-white shadow-lg';
      case 'teal':
        return 'bg-teal-400 text-white shadow-lg';
        
      // Cyans
      case 'cyan':
        return 'bg-cyan-400 text-white shadow-lg';
        
      // Grays
      case 'slate':
        return 'bg-slate-400 text-white shadow-lg';
      case 'gray':
        return 'bg-gray-400 text-white shadow-lg';
      case 'zinc':
        return 'bg-zinc-400 text-white shadow-lg';
      case 'neutral':
        return 'bg-neutral-400 text-white shadow-lg';
      case 'stone':
        return 'bg-stone-400 text-white shadow-lg';
        
      // Default (white)
      default:
        return 'bg-white shadow-sm';
    }
  };

  const getTextClasses = () => {
    return theme === 'default' ? 'text-gray-900' : 'text-white';
  };

  const getLinkClasses = () => {
    return theme === 'default' 
      ? 'text-gray-500 hover:text-gray-700' 
      : 'text-white/80 hover:text-white';
  };

  const getLogoAnimationClass = () => {
    return theme === 'default' ? 'animate-spin-slow' : 'animate-bounce-slow';
  };

  const getMenuItemClasses = (itemId: string) => {
    const isActive = activeMenu === itemId;
    const baseClasses = "px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200";
    
    if (theme === 'default') {
      return isActive 
        ? `${baseClasses} bg-gray-100 text-gray-900` 
        : `${baseClasses} text-gray-600 hover:bg-gray-50 hover:text-gray-900`;
    } else {
      return isActive 
        ? `${baseClasses} bg-white/20 text-white` 
        : `${baseClasses} text-white/80 hover:bg-white/10 hover:text-white`;
    }
  };

  const getLoginButtonClasses = () => {
    const baseClasses = "ml-4 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center";
    
    return theme === 'default'
      ? `${baseClasses} bg-indigo-500 text-white hover:bg-indigo-600`
      : `${baseClasses} bg-white text-blue-500 hover:bg-blue-50`;
  };

  const handleMenuClick = (itemId: string) => {
    setActiveMenu(itemId);
  };

  return (
    <header className={getThemeClasses()}>
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={reactLogo} 
              className={`h-8 w-8 ${getLogoAnimationClass()}`} 
              alt="React logo" 
            />
            <h1 className={`ml-3 text-xl font-bold ${getTextClasses()}`}>
              React Interview Prep
            </h1>
          </div>
          
          {/* Navigation menu */}
          <div className="hidden md:block">
            <nav className="flex space-x-1">
              {menuItems.map(item => (
                <a
                  key={item.id}
                  href={item.path}
                  className={getMenuItemClasses(item.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.id);
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-1.5" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center">
            {/* Login button */}
            <button className={getLoginButtonClasses()}>
              <FontAwesomeIcon icon={faRightToBracket} className="mr-1.5" />
              Login
            </button>
            
            {/* GitHub link placed after Login button */}
            <a
              href="https://github.com/Swamy-s-Tech-Skills-Academy/learn-reactjs/tree/main/react-samples"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 ${getLinkClasses()} text-sm flex items-center`}
            >
              <FontAwesomeIcon icon={faGithub} className="mr-1" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;