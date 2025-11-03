import React, { createContext, useState, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useLocalStorage('favorites', []); // Using custom hook
  const [isLoading, setIsLoading] = useState(false);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const value = {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    favorites,
    toggleFavorite,
    isLoading,
    setIsLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
