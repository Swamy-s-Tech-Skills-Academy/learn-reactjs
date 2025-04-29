import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 border-t border-gray-200 mt-12 ${className}`}>
      <p className="text-center text-gray-500 text-sm">
        React Interview Prep Examples - Built with React, TypeScript, and Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;