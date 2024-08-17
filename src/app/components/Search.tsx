'use client';

import React from 'react';
import { useItemContext } from '../context/ItemContext';

export const Search: React.FC = () => {
  const { query, setQuery, filteredItems } = useItemContext();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item._id}>{item.title}</li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};
