import React from "react";

export default function Filter({ sortVal, onSortChange }) {
  return (
    <div className="w-full flex md:justify-end px-2 justify-center mb-4">
      <select
        className="text-gray-600 border text-sm p-2"
        value={sortVal}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="default">Default Sort</option>
        <option value="title">Sort by Title</option>
        <option value="lowTohigh">Price: Low to High</option>
        <option value="highTolow">Price: High to Low</option>
        <option value="sale">Sale Items</option>
      </select>
    </div>
  );
}
