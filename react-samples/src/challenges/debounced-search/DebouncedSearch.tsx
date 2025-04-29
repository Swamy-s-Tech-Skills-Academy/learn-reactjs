import React, { useState, useEffect } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

/**
 * DebouncedSearch component demonstrates using a custom debounce hook
 * to create a search input that only triggers API calls after the user
 * stops typing.
 * 
 * Common interview topics covered:
 * - Custom hooks
 * - useEffect for API calls
 * - Debouncing to optimize performance
 * - Handling loading states
 */
export function DebouncedSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Use the custom debounce hook to delay search until typing stops
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  // This effect runs when the debounced search term changes
  useEffect(() => {
    const searchForResults = async () => {
      // Don't search if the debounced term is empty
      if (debouncedSearchTerm.trim() === '') {
        setResults([]);
        return;
      }
      
      setIsLoading(true);
      
      try {
        // Simulate API call with a delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock results - in a real app, this would be an API call
        const mockResults = [
          `Result 1 for "${debouncedSearchTerm}"`,
          `Result 2 for "${debouncedSearchTerm}"`,
          `Result 3 for "${debouncedSearchTerm}"`,
          `Result 4 for "${debouncedSearchTerm}"`,
        ];
        
        setResults(mockResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    searchForResults();
  }, [debouncedSearchTerm]);
  
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Debounced Search Example</h2>
      
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Search (type to see debounce in action)
        </label>
        <input
          type="text"
          id="search"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Start typing to search..."
        />
        <p className="mt-1 text-sm text-gray-500">
          Debounced value: "{debouncedSearchTerm}"
        </p>
      </div>
      
      <div className="mt-4">
        {isLoading ? (
          <p className="text-gray-500">Loading results...</p>
        ) : results.length > 0 ? (
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {results.map((result, index) => (
              <li key={index} className="px-4 py-3 hover:bg-gray-50">
                {result}
              </li>
            ))}
          </ul>
        ) : debouncedSearchTerm.trim() !== '' ? (
          <p className="text-gray-500">No results found</p>
        ) : null}
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-md border border-gray-200">
        <h3 className="text-md font-semibold mb-2">Interview Notes</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Debouncing prevents excessive API calls while typing</li>
          <li>The search only happens 500ms after the user stops typing</li>
          <li>useEffect dependency array ensures search only runs when debounced value changes</li>
          <li>Loading states improve UX by giving feedback during API calls</li>
        </ul>
      </div>
    </div>
  );
}