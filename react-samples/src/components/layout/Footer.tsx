import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faCode, faBook, faLaptop } from '@fortawesome/free-solid-svg-icons';

interface FooterProps {
  className?: string;
  theme?: 'blue' | 'default';
}

const Footer: React.FC<FooterProps> = ({ className = '', theme = 'blue' }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'blue':
        return {
          footer: 'bg-blue-50 border-t border-blue-100',
          heading: 'text-blue-700 font-semibold',
          link: 'text-blue-600 hover:text-blue-800',
          text: 'text-blue-600',
          button: 'bg-blue-500 hover:bg-blue-600 text-white',
          copyright: 'text-blue-500'
        };
      default:
        return {
          footer: 'bg-gray-50 border-t border-gray-200',
          heading: 'text-gray-700 font-semibold',
          link: 'text-gray-600 hover:text-gray-800',
          text: 'text-gray-600',
          button: 'bg-gray-500 hover:bg-gray-600 text-white',
          copyright: 'text-gray-500'
        };
    }
  };

  const themeClasses = getThemeClasses();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`mt-12 ${themeClasses.footer} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className={`text-lg ${themeClasses.heading} mb-4`}>
              About React Interview Prep
            </h3>
            <p className={`${themeClasses.text} text-sm mb-4`}>
              A comprehensive collection of React examples and patterns to help you prepare for interviews and improve your React skills.
            </p>
            <a 
              href="https://github.com/Swamy-s-Tech-Skills-Academy/learn-reactjs/tree/main/react-samples"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center ${themeClasses.link} text-sm`}
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              GitHub Repository
            </a>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className={`text-lg ${themeClasses.heading} mb-4`}>
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/styling-demo" className={`inline-flex items-center ${themeClasses.link} text-sm`}>
                  <FontAwesomeIcon icon={faBook} className="mr-2" />
                  Styling Demo
                </Link>
              </li>
              <li>
                <Link to="/components" className={`inline-flex items-center ${themeClasses.link} text-sm`}>
                  <FontAwesomeIcon icon={faCode} className="mr-2" />
                  Component Examples
                </Link>
              </li>
              <li>
                <Link to="/challenges" className={`inline-flex items-center ${themeClasses.link} text-sm`}>
                  <FontAwesomeIcon icon={faLaptop} className="mr-2" />
                  Interview Challenges
                </Link>
              </li>
            </ul>
          </div>

          {/* Back to top Section */}
          <div className="text-center md:text-right">
            <button 
              onClick={scrollToTop}
              className={`${themeClasses.button} rounded px-4 py-2 text-sm transition-colors duration-200`}
              aria-label="Back to top"
            >
              <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className={`text-center ${themeClasses.copyright} text-sm`}>
            &copy; {currentYear} React Interview Prep Examples - Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;