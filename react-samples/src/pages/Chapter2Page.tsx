import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';

// Import all Chapter 2 components
import BlogPostExample from '../components/ch2/BlogPostExample';
import CssSpecificityExample from '../components/ch2/CssSpecificityExample';
import YouTubeApiExample from '../components/ch2/YouTubeApiExample';
import DragAndDrop from '../components/ch2/DragAndDrop';
import FormSimple from '../components/ch2/FormSimple';
import FormAdvanced from '../components/ch2/FormAdvanced';
import Timer from '../components/ch2/Timer';

// This will be our main Chapter 2 page component that serves as a container for all Ch2 content
const Chapter2Page = () => {
  const location = useLocation();
  
  // Check if we're at the root ch2 path with no sub-route
  const isRootPath = location.pathname === '/ch2';
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {isRootPath ? (
        // Display a menu of all Chapter 2 examples if on the main Ch2 page
        <div>
          <h1 className="text-3xl font-bold mb-6">Chapter 2 Examples</h1>
          <p className="text-lg text-gray-700 mb-8">
            Explore various React examples from Chapter 2. Click on any example below to see it in action.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExampleCard 
              title="Blog Post Example" 
              path="/ch2/blog-post"
              description="A simple blog post component with styled content." 
            />
            <ExampleCard 
              title="CSS Specificity Example" 
              path="/ch2/css-specificity"
              description="Demonstrates CSS specificity concepts within React." 
            />
            <ExampleCard 
              title="YouTube API Example" 
              path="/ch2/youtube-api"
              description="Integration with the YouTube API to display videos." 
            />
            <ExampleCard 
              title="Drag and Drop" 
              path="/ch2/drag-and-drop"
              description="Implementation of drag and drop functionality." 
            />
            <ExampleCard 
              title="Simple Form" 
              path="/ch2/form-simple"
              description="Basic form handling in React." 
            />
            <ExampleCard 
              title="Advanced Form" 
              path="/ch2/form-advanced"
              description="Complex form with validation and multiple inputs." 
            />
            <ExampleCard 
              title="Timer" 
              path="/ch2/timer"
              description="A timer component demonstrating state and effects." 
            />
          </div>
        </div>
      ) : (
        // Otherwise, render the sub-routes
        <Routes>
          <Route path="/blog-post" element={<BlogPostExample />} />
          <Route path="/css-specificity" element={<CssSpecificityExample />} />
          <Route path="/youtube-api" element={<YouTubeApiExample />} />
          <Route path="/drag-and-drop" element={<DragAndDrop />} />
          <Route path="/form-simple" element={<FormSimple />} />
          <Route path="/form-advanced" element={<FormAdvanced />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      )}
    </div>
  );
};

// Helper component for displaying each example card on the main Ch2 page
const ExampleCard = ({ title, description, path }) => {
  return (
    <Link 
      to={path} 
      className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex justify-end">
        <span className="text-indigo-600 hover:text-indigo-800 font-medium">
          View Example &rarr;
        </span>
      </div>
    </Link>
  );
};

export default Chapter2Page;