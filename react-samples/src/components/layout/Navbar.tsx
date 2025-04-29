import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import reactLogo from '../../assets/react.svg';

interface NavbarProps {
  theme?: 'blue' | 'green' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'default';
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'default' }) => {
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

  return (
    <header className={getThemeClasses()}>
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={reactLogo} 
            className={`h-10 w-10 ${getLogoAnimationClass()}`} 
            alt="React logo" 
          />
          <h1 className={`ml-3 text-2xl font-bold ${getTextClasses()}`}>
            React Interview Prep
          </h1>
        </div>
        <a
          href="https://github.com/Swamy-s-Tech-Skills-Academy/learn-reactjs/tree/main/react-samples"
          target="_blank"
          rel="noopener noreferrer"
          className={`${getLinkClasses()} text-sm flex items-center`}
        >
          <FontAwesomeIcon icon={faGithub} className="mr-1" />
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Navbar;