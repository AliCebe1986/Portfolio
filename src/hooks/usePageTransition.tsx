import { useState, useEffect } from 'react';

/**
 * A hook that helps manage page transitions to prevent blinking
 * by controlling when animations and content should become visible
 */
export function usePageTransition(delay = 100) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isReady;
}

export default usePageTransition;
