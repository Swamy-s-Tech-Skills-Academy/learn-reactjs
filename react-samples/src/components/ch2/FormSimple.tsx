import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const FormSimple = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Simple React Form</h1>
      <p className="text-gray-600 mb-8">
        This component demonstrates a basic form implementation in React using controlled components.
      </p>

      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <p className="font-bold">Success!</p>
          <p>Your form has been submitted successfully.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">React Form Concepts</h2>
        <p className="mb-4">
          This example demonstrates controlled components, which are a key concept in React form handling:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>
            <strong>Controlled Components:</strong> Form elements like <code>input</code>, <code>textarea</code>, and <code>select</code> maintain their own state in vanilla HTML. In React, we typically keep this state in component state and update it with <code>onChange</code> handlers.
          </li>
          <li>
            <strong>Single Source of Truth:</strong> The React state becomes the "single source of truth" for the form data.
          </li>
          <li>
            <strong>State Management:</strong> We use the <code>useState</code> hook to manage form data in a structured way.
          </li>
          <li>
            <strong>Form Submission:</strong> We handle form submission with <code>onSubmit</code>, preventing default behavior and accessing the form data from our state.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Key Implementation Details</h3>
        <pre className="bg-gray-200 p-3 rounded-md overflow-x-auto mb-4">
{`// State to hold form data
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
});

// Generic change handler for all inputs
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevData => ({
    ...prevData,
    [name]: value
  }));
};`}
        </pre>
      </div>
    </div>
  );
};

export default FormSimple;