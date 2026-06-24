import { useState, useEffect, useCallback, useRef } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // Store initialValue in a ref so it doesn't trigger hook updates when reference changes
  const initialValueRef = useRef<T>(initialValue)

  useEffect(() => {
    initialValueRef.current = initialValue
  }, [initialValue])

  // Read state from localStorage or use initialValue
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValueRef.current
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValueRef.current
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValueRef.current
    }
  }, [key])

  const [storedValue, setStoredValue] = useState<T>(readValue)

  // Setter function that supports functional updates
  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      setStoredValue((valueToStore) => {
        const newValue = value instanceof Function ? value(valueToStore) : value
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(newValue))
        }
        return newValue
      })
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }, [key])

  useEffect(() => {
    setStoredValue(readValue())
  }, [key, readValue])

  return [storedValue, setValue]
}

