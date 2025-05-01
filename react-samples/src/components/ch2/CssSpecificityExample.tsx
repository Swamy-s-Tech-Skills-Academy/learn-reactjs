import React from 'react';
import './CssSpecificityExample.css'; // We'll create this file next

const CssSpecificityExample = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">CSS Specificity in React</h1>
      <p className="text-gray-600 mb-6">
        Understanding how CSS specificity works helps you write cleaner and more maintainable styles.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Specificity Basics</h2>
          <p className="mb-3">
            CSS specificity determines which style rules take precedence when multiple rules target the same element.
            The higher the specificity, the more precedence a rule has.
          </p>
          <p>
            Specificity is calculated using four components (a, b, c, d):
          </p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Inline styles (a)</li>
            <li>IDs (b)</li>
            <li>Classes, attributes, and pseudo-classes (c)</li>
            <li>Elements and pseudo-elements (d)</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Examples</h2>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Selector</th>
                <th className="border border-gray-300 px-4 py-2">Specificity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><code>p</code></td>
                <td className="border border-gray-300 px-4 py-2">0,0,0,1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><code>.class</code></td>
                <td className="border border-gray-300 px-4 py-2">0,0,1,0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><code>#id</code></td>
                <td className="border border-gray-300 px-4 py-2">0,1,0,0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><code>style="..."</code></td>
                <td className="border border-gray-300 px-4 py-2">1,0,0,0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Live Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="border p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Example 1: Class vs. Element</h3>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="example-1">This paragraph has element styling.</p>
              <p className="text-example-1">This paragraph has class styling.</p>
            </div>
            <div className="bg-gray-100 p-3 rounded text-sm">
              <pre>{`p.example-1 { color: blue; }
.text-example-1 { color: red; }`}</pre>
            </div>
          </div>
        </div>
        
        <div className="border p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Example 2: Multiple Classes</h3>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-example-2">Basic class</p>
              <p className="text-example-2 important">With additional class</p>
            </div>
            <div className="bg-gray-100 p-3 rounded text-sm">
              <pre>{`.text-example-2 { color: green; }
.important { color: purple; }`}</pre>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border p-4 rounded shadow-sm mb-8">
        <h3 className="text-lg font-semibold mb-2">Example 3: ID vs. Class</h3>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p id="special-paragraph" className="text-example-3">This paragraph has both ID and class styling.</p>
          </div>
          <div className="bg-gray-100 p-3 rounded text-sm">
            <pre>{`#special-paragraph { color: orange; }
.text-example-3 { color: teal; }`}</pre>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Best Practices for CSS in React</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Prefer component-scoped styling (CSS Modules, styled-components) to avoid specificity conflicts</li>
          <li>Avoid using IDs for styling when possible</li>
          <li>Use naming conventions like BEM to create more specific selectors without increasing specificity too much</li>
          <li>Consider utility-first approaches like Tailwind CSS which avoid specificity issues altogether</li>
          <li>Remember that inline styles in React have the highest specificity and will override other styles</li>
        </ul>
      </div>
    </div>
  );
};

export default CssSpecificityExample;