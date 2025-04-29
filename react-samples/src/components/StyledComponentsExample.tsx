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
    <div className="my-8">
      {/* This heading uses Tailwind CSS */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Styled Components Example
      </h1>
      
      {/* This container uses styled-components */}
      <StyledContainer>
        <h2>Using styled-components</h2>
        <p>
          This example demonstrates how to use styled-components alongside Tailwind CSS.
          The buttons below are styled using styled-components, while other elements
          may use Tailwind utility classes.
        </p>
        
        <div className="buttons">
          <StyledButton primary>Primary Button</StyledButton>
          <StyledButton>Secondary Button</StyledButton>
        </div>
      </StyledContainer>
      
      {/* This section uses Tailwind CSS */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
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
    </div>
  );
};

export default StyledComponentsExample;