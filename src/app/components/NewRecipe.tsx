'use client';

import React, { useState } from 'react';

export const NewRecipe: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/recepts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      const data = await response.json();

      if (data.success) {
        setTitle('');
        setDescription('');
      } else {
        console.error('Error with adding new item');
      }
    } catch (error) {
      console.error('Error in creating new item:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Give your recipe</h1>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Give Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Give Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
