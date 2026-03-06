import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const getMatches = (mediaQuery: string): boolean => {
    // Prevent SSR issues
    if (typeof window === 'undefined') {
      return false;
    }
    return window.matchMedia(mediaQuery).matches;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    // Prevent SSR issues
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQueryList = window.matchMedia(query);
    
    // Update state when media query matches change
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set initial value
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMatches(mediaQueryList.matches);

    // Listen for changes
    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};