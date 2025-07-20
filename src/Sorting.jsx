import React from 'react';

export default function Sorting({ sortVal, onSortChange }) {
  return (
    <select value={sortVal} onChange={onSortChange} className="border p-2 border-rose-400 bg-gray-700 text-white rounded-md">
      <option value="default">Sort By</option>
      <option value="lowTohigh">Price: Low to High</option>
      <option value="highTolow">Price: High to Low</option>
      <option value="category">Category</option>
    </select>
  );
} 