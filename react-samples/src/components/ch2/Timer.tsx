import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  // Format time in HH:MM:SS.MS format
  const formatTime = (timeInMs: number): string => {
    const milliseconds = Math.floor((timeInMs % 1000) / 10);
    const seconds = Math.floor((timeInMs / 1000) % 60);
    const minutes = Math.floor((timeInMs / (1000 * 60)) % 60);
    const hours = Math.floor(timeInMs / (1000 * 60 * 60));

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds
      .toString()
      .padStart(2, '0')}`;
  };

  // Start the timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - time;
      
      intervalRef.current = window.setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
  };

  // Pause the timer
  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current as number);
      setIsRunning(false);
    }
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(intervalRef.current as number);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  // Record a lap
  const recordLap = () => {
    if (isRunning) {
      setLaps([...laps, time]);
    }
  };

  // Clean up interval on component unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">React Timer</h1>
      <p className="text-gray-600 mb-8">
        This component demonstrates using React state, effects, and refs to create a timer application
        with start, pause, reset, and lap functionality.
      </p>

      <div className="flex flex-col items-center mb-8">
        {/* Timer Display */}
        <div className="text-6xl font-mono mb-8 bg-gray-100 px-8 py-6 rounded-lg shadow-inner w-full text-center">
          {formatTime(time)}
        </div>

        {/* Timer Controls */}
        <div className="flex space-x-4">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Start
            </button>
          ) : (
            <button
              onClick={pauseTimer}
              className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Pause
            </button>
          )}

          <button
            onClick={resetTimer}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Reset
          </button>

          <button
            onClick={recordLap}
            disabled={!isRunning}
            className={`px-6 py-2 rounded-md transition-colors flex items-center ${
              isRunning
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Lap
          </button>
        </div>
      </div>

      {/* Laps Section */}
      {laps.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Laps</h2>
          <div className="bg-gray-100 rounded-lg p-4 max-h-64 overflow-y-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Lap</th>
                  <th className="px-4 py-2 text-left">Time</th>
                  <th className="px-4 py-2 text-left">Total Time</th>
                </tr>
              </thead>
              <tbody>
                {laps.map((lapTime, index) => {
                  const prevLapTime = index > 0 ? laps[index - 1] : 0;
                  const lapDuration = lapTime - prevLapTime;
                  
                  return (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2 font-mono">{formatTime(lapDuration)}</td>
                      <td className="border px-4 py-2 font-mono">{formatTime(lapTime)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Timer Concepts */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Timer Implementation Concepts</h2>
        <p className="mb-4">
          This timer example demonstrates several important React concepts:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>
            <strong>useState:</strong> Managing the timer state (time value, running status, laps).
          </li>
          <li>
            <strong>useEffect:</strong> Handling side effects and cleanup when the component unmounts.
          </li>
          <li>
            <strong>useRef:</strong> Storing mutable values that don't trigger re-renders (the interval ID).
          </li>
          <li>
            <strong>Working with time:</strong> Using <code>Date.now()</code> and <code>setInterval</code> to track elapsed time.
          </li>
          <li>
            <strong>Conditional rendering:</strong> Showing different buttons based on the timer state.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold mt-6 mb-2">Key Implementation Details</h3>
        <pre className="bg-gray-200 p-3 rounded-md overflow-x-auto mb-4">
{`// Store interval ID in a ref so it persists between renders
const intervalRef = useRef<number | null>(null);

// Start timer calculation from where we left off
const startTime = Date.now() - time;

// Set up the interval
intervalRef.current = window.setInterval(() => {
  setTime(Date.now() - startTime);
}, 10);

// Clean up on component unmount
useEffect(() => {
  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, []);`}
        </pre>
      </div>
    </div>
  );
};

export default Timer;