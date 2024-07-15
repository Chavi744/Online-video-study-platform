// src/components/CategoryList.js
import React from 'react';

const CategoryList = ({ categories, setSelectedCategory }) => {
  return (
    <div className="category-list">
      <h2>Select a Category</h2>
      <ul>
        {categories && categories.map(category => (
          <li key={category}>
            <button onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
