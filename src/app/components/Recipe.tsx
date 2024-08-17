'use client';

import React, { useEffect } from 'react';
import { useItemContext } from '../context/ItemContext';

export const Recipe: React.FC = () => {
  const { items, setItems } = useItemContext();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/recepts');
        const data = await response.json();

        if (data.success) {
          setItems(data.data);
        } else {
          console.error('Error in response:', data.message);
        }
      } catch (error) {
        console.error('Error in fetching items:', error);
      }
    };

    fetchItems();
  }, [setItems]);

  return (
    <div>
      <h1>All Recipes</h1>
      <div>
        {items.map((item) => (
          <li key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </div>
    </div>
  );
};
