'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Items } from '../types/Item';

interface ItemContextType {
  items: Items[];
  setItems: React.Dispatch<React.SetStateAction<Items[]>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filteredItems: Items[];
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Items[]>([]);
  const [query, setQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<Items[]>([]);

  useEffect(() => {
    const handleSearch = () => {
      if (query) {
        const results = items.filter(
          item => item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItems(results);
      } else {
        setFilteredItems(items); // Show all items if query is empty
      }
    };

    handleSearch();
  }, [query, items]);

  return (
    <ItemContext.Provider value={{ items, setItems, query, setQuery, filteredItems }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItemContext must be used within an ItemProvider');
  }
  return context;
};
