import { useEffect } from 'react';

export const useRouteChangingListner = (callback: () => void) => {
  useEffect(() => {
    callback();
    document.addEventListener('onRouteUpdated', callback);
    return () => {
      document.removeEventListener('onRouteUpdated', callback);
    };
  }, []);
};
