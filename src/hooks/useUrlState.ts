import { useState, useEffect, useCallback } from 'react';

export function useUrlState<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [state, setState] = useState<T>(() => {
    const url = new URL(window.location.href);
    const urlValue = url.searchParams.get(key);
    
    if (urlValue === null) {
      return defaultValue;
    }
    
    try {
      return JSON.parse(decodeURIComponent(urlValue));
    } catch {
      return defaultValue;
    }
  });

  const updateState = useCallback((newValue: T) => {
    setState(newValue);
    
    const url = new URL(window.location.href);
    if (newValue === defaultValue) {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, encodeURIComponent(JSON.stringify(newValue)));
    }
    
    window.history.replaceState({}, '', url.toString());
  }, [key, defaultValue]);

  useEffect(() => {
    const handlePopState = () => {
      const url = new URL(window.location.href);
      const urlValue = url.searchParams.get(key);
      
      if (urlValue === null) {
        setState(defaultValue);
      } else {
        try {
          setState(JSON.parse(decodeURIComponent(urlValue)));
        } catch {
          setState(defaultValue);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [key, defaultValue]);

  return [state, updateState];
}