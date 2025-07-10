import React, { useState, useEffect } from "react";

export default function Filter({sortVal,onSortChange}){
  return (
    <div className="w-full flex md:justify-end px-2 justify-center">
      
      <select className="text-gray-600 border text-sm p-2" placeholder="Default Sorting"
        value={sortVal}
        onChange={onSortChange}
        >
        <option value="default">Default Sort</option>
        <option value="title">Sort by title</option>
        <option value="lowTohigh">Sort by Price:Low to High</option>
        <option value="highTolow">Sort by Price:High to Low</option>
      </select>
    </div>      
  )
}