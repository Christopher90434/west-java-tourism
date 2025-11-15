import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Start with loading
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const showLoading = useCallback(() => setIsLoading(true), []);
  const hideLoading = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsFirstLoad(false);
      }, 2500); 

      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading, isFirstLoad }}>
      {children}
    </LoadingContext.Provider>
  );
};
