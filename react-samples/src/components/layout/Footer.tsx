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

// {/* Showcase all available Navbar themes */}
// <div className="space-y-1">
// {/* Default theme */}
// <Navbar theme="default" />

// {/* Blues */}
// <Navbar theme="blue" />
// <Navbar theme="sky" />
// <Navbar theme="indigo" />

// {/* Purples */}
// <Navbar theme="violet" />
// <Navbar theme="purple" />
// <Navbar theme="fuchsia" />

// {/* Pinks & Roses */}
// <Navbar theme="pink" />
// <Navbar theme="rose" />

// {/* Reds & Oranges */}
// <Navbar theme="red" />
// <Navbar theme="orange" />

// {/* Yellows */}
// <Navbar theme="amber" />
// <Navbar theme="yellow" />

// {/* Greens */}
// <Navbar theme="lime" />
// <Navbar theme="green" />
// <Navbar theme="emerald" />
// <Navbar theme="teal" />

// {/* Cyans */}
// <Navbar theme="cyan" />

// {/* Grays */}
// <Navbar theme="slate" />
// <Navbar theme="gray" />
// <Navbar theme="zinc" />
// <Navbar theme="neutral" />
// <Navbar theme="stone" />
// </div>