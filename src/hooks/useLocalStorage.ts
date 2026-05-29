import { useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (e: any) {
      return initialValue;
    }
  });

  function setValue(value: T) {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e: any) {
      console.error('Error setting localStorage key:', key, e);
    }
  }

  return [storedValue, setValue];
}
