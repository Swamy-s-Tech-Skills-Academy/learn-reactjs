import React from 'react';

const BlogPostExample = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Understanding React Components</h1>
      <div className="text-gray-500 mb-6">
        <span>Published: April 30, 2025</span>
        <span className="mx-2">•</span>
        <span>Author: React Developer</span>
      </div>
      
      <img 
        src="https://via.placeholder.com/800x400" 
        alt="React Components" 
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      
      <div className="prose lg:prose-xl">
        <p className="mb-4">
          React components are the building blocks of any React application. They allow you to split the UI into independent, 
          reusable pieces, and think about each piece in isolation.
        </p>
        
        <h2 className="text-2xl font-bold mt-6 mb-4">Functional Components</h2>
        <p className="mb-4">
          Functional components are the simplest way to declare a component in React. They are JavaScript functions that accept props 
          and return React elements describing what should appear on the screen.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto mb-4">
          <code className="text-sm">
{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
          </code>
        </pre>
        
        <h2 className="text-2xl font-bold mt-6 mb-4">Class Components</h2>
        <p className="mb-4">
          Class components offer more features and are defined using ES6 classes. They can maintain state and have access to lifecycle methods.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto mb-4">
          <code className="text-sm">
{`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}
          </code>
        </pre>
        
        <h2 className="text-2xl font-bold mt-6 mb-4">Component Composition</h2>
        <p className="mb-4">
          Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail.
        </p>
        <p className="mb-4">
          Component composition is a powerful pattern in React that enables code reuse and clean separation of concerns.
        </p>
        
        <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6">
          "Composition over inheritance" is a principle often encouraged in React development.
        </blockquote>
        
        <h2 className="text-2xl font-bold mt-6 mb-4">Conclusion</h2>
        <p>
          Understanding components is crucial for effective React development. Start with simple functional components and gradually 
          explore more complex patterns as you build larger applications.
        </p>
      </div>
    </div>
  );
};

export default BlogPostExample;