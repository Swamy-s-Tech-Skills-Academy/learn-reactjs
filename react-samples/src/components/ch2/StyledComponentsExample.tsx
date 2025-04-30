import styled from 'styled-components';

// A styled button component using styled-components
const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  /* Props-based styling - a key feature of styled-components */
  background-color: ${props => props.primary ? '#4f46e5' : 'white'};
  color: ${props => props.primary ? 'white' : '#4f46e5'};
  border: 1px solid ${props => props.primary ? '#4f46e5' : '#e5e7eb'};
  
  /* Pseudo-classes */
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
  
  /* Media queries */
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.875rem;
  }
`;

// A styled container component
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  
  /* Nested selectors */
  h2 {
    color: #111827;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  
  p {
    color: #6b7280;
    margin-bottom: 1rem;
  }
  
  /* Child components */
  .buttons {
    display: flex;
    flex-wrap: wrap;
  }
`;

// Example component that uses both styled-components and Tailwind CSS
const StyledComponentsExample = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Styled Components Example</h1>
      <p className="text-gray-600 mb-8">
        This example demonstrates how to use styled-components alongside Tailwind CSS,
        showing the benefits of both approaches.
      </p>
      
      {/* This container uses styled-components */}
      <StyledContainer>
        <h2>Using styled-components</h2>
        <p>
          Styled-components allow you to write actual CSS in your JavaScript. The styles are scoped 
          to a specific component, eliminating the problem of class name collisions.
        </p>
        
        <div className="buttons">
          <StyledButton primary>Primary Button</StyledButton>
          <StyledButton>Secondary Button</StyledButton>
        </div>
      </StyledContainer>
      
      {/* This section uses Tailwind CSS */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200 my-6">
        <h2 className="text-lg font-medium text-gray-900 mb-3">
          Using Tailwind CSS
        </h2>
        <p className="text-gray-600 mb-4">
          For comparison, this section is styled entirely with Tailwind CSS utility classes.
          Both approaches can be used in the same project.
        </p>
        
        <div className="flex flex-wrap">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium m-2 hover:bg-indigo-700 transition-colors">
            Tailwind Primary
          </button>
          <button className="bg-white text-indigo-600 border border-gray-300 px-4 py-2 rounded-md font-medium m-2 hover:bg-gray-50 transition-colors">
            Tailwind Secondary
          </button>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">When To Use Each Approach</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Styled Components</h3>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>Dynamic styling based on props or state</li>
              <li>Complex CSS with nested selectors</li>
              <li>Reusable component libraries</li>
              <li>When you want true CSS-in-JS capabilities</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900">Tailwind CSS</h3>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>Rapid UI development</li>
              <li>Consistent design system constraints</li>
              <li>Responsive designs with breakpoint utilities</li>
              <li>When you want to avoid writing custom CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledComponentsExample;