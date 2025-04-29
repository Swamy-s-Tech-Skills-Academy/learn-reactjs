import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../src/hooks/useDebounce';

describe('useDebounce', () => {
  jest.useFakeTimers();
  
  test('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial value', 500));
    expect(result.current).toBe('initial value');
  });

  test('should update the value after the specified delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial value', delay: 500 } }
    );
    
    // Initial value should be returned immediately
    expect(result.current).toBe('initial value');
    
    // Update the value
    rerender({ value: 'updated value', delay: 500 });
    
    // Value should not have changed yet
    expect(result.current).toBe('initial value');
    
    // Fast-forward time by 500ms
    act(() => {
      jest.advanceTimersByTime(500);
    });
    
    // Now the value should be updated
    expect(result.current).toBe('updated value');
  });

  test('should reset the timer if value changes before delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial value', delay: 500 } }
    );
    
    // Update the value after 200ms
    rerender({ value: 'intermediate value', delay: 500 });
    act(() => {
      jest.advanceTimersByTime(200);
    });
    
    // Value should still be the initial one
    expect(result.current).toBe('initial value');
    
    // Update again before the delay completes
    rerender({ value: 'final value', delay: 500 });
    
    // Fast-forward by 300ms (total of 500ms from first update)
    act(() => {
      jest.advanceTimersByTime(300);
    });
    
    // Value should still be the initial one because the timer was reset
    expect(result.current).toBe('initial value');
    
    // Fast-forward by another 500ms to complete the delay for the second update
    act(() => {
      jest.advanceTimersByTime(500);
    });
    
    // Now the value should be the final one
    expect(result.current).toBe('final value');
  });
});