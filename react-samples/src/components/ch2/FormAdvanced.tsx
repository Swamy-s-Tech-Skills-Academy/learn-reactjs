import React, { useState, useEffect } from 'react';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  occupation: string;
  interests: string[];
  agreeTos: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  age?: string;
  occupation?: string;
  interests?: string;
  agreeTos?: string;
}

const FormAdvanced = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    occupation: '',
    interests: [],
    agreeTos: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableInterests = [
    'Programming', 'Web Development', 'UI/UX Design', 
    'Data Science', 'Mobile Development', 'DevOps'
  ];

  // Validate form when values change
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      validateForm();
    }
  }, [formData]);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    
    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match';
    }
    
    // Age validation
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 18 || Number(formData.age) > 120) {
      newErrors.age = 'Age must be a number between 18 and 120';
    }
    
    // Occupation validation
    if (!formData.occupation) {
      newErrors.occupation = 'Occupation is required';
    }
    
    // Interests validation
    if (formData.interests.length === 0) {
      newErrors.interests = 'Select at least one interest';
    }
    
    // Terms validation
    if (!formData.agreeTos) {
      newErrors.agreeTos = 'You must agree to terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          interests: [...prev.interests, value]
        };
      } else {
        return {
          ...prev,
          interests: prev.interests.filter(interest => interest !== value)
        };
      }
    });
    
    setTouched(prev => ({
      ...prev,
      interests: true
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const touchedFields: Record<string, boolean> = {};
    Object.keys(formData).forEach(key => {
      touchedFields[key] = true;
    });
    setTouched(touchedFields);
    
    const isValid = validateForm();
    
    if (isValid) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted successfully:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            age: '',
            occupation: '',
            interests: [],
            agreeTos: false
          });
          setTouched({});
          setIsSubmitted(false);
        }, 3000);
      }, 1500);
    } else {
      console.log('Form has errors:', errors);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Advanced Form with Validation</h1>
      <p className="text-gray-600 mb-8">
        This component demonstrates a comprehensive form with client-side validation, error handling, 
        and proper submission flow.
      </p>

      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <p className="font-bold">Success!</p>
          <p>Your form has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.fullName && touched.fullName
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.fullName && touched.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email && touched.email
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.password && touched.password
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.confirmPassword && touched.confirmPassword
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Age & Occupation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                onBlur={handleBlur}
                min="18"
                max="120"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.age && touched.age
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
              {errors.age && touched.age && (
                <p className="text-red-500 text-sm mt-1">{errors.age}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="occupation" className="block text-gray-700 font-medium mb-2">
                Occupation <span className="text-red-500">*</span>
              </label>
              <select
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.occupation && touched.occupation
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
              >
                <option value="">Select an occupation</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
              </select>
              {errors.occupation && touched.occupation && (
                <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>
              )}
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Interests <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {availableInterests.map(interest => (
                <div key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`interest-${interest}`}
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleInterestChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`interest-${interest}`} className="ml-2 text-gray-700">
                    {interest}
                  </label>
                </div>
              ))}
            </div>
            {errors.interests && touched.interests && (
              <p className="text-red-500 text-sm mt-1">{errors.interests}</p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeTos"
                name="agreeTos"
                checked={formData.agreeTos}
                onChange={handleChange}
                className={`h-4 w-4 focus:ring-blue-500 rounded ${
                  errors.agreeTos && touched.agreeTos
                    ? 'border-red-500 text-red-600'
                    : 'border-gray-300 text-blue-600'
                }`}
              />
              <label htmlFor="agreeTos" className="ml-2 text-gray-700">
                I agree to the terms and conditions <span className="text-red-500">*</span>
              </label>
            </div>
            {errors.agreeTos && touched.agreeTos && (
              <p className="text-red-500 text-sm mt-1">{errors.agreeTos}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded-md transition-colors ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      )}

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Form Validation Concepts</h2>
        <p className="mb-4">
          This example demonstrates several advanced form handling concepts:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>
            <strong>Field-level validation:</strong> Each field has its own validation rules.
          </li>
          <li>
            <strong>Touched state:</strong> We track which fields the user has interacted with to avoid showing errors too early.
          </li>
          <li>
            <strong>Cross-field validation:</strong> The confirm password field is validated against the password field.
          </li>
          <li>
            <strong>Visual feedback:</strong> Form fields change appearance based on their validation state.
          </li>
          <li>
            <strong>Form submission handling:</strong> Showing loading state during submission and success message afterward.
          </li>
        </ul>

        <p className="mt-4 text-sm text-gray-600">
          In real-world applications, you might consider using form libraries like Formik, React Hook Form, 
          or Yup for more complex validation needs.
        </p>
      </div>
    </div>
  );
};

export default FormAdvanced;