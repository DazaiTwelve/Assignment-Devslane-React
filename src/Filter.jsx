import React, { useState, useEffect } from "react";

export default function Filter({sortVal,onSortChange,onSearch}){
  return (
    <div className="w-full flex md:justify-between px-2 justify-center gap-3">
      <input type="text" placeholder="search" className="border p-2 rounded-full grow" onChange={onSearch}/>
      <select className="text-gray-400 border text-sm p-2" placeholder="Default Sorting"
        value={sortVal}
        onChange={onSortChange}
        >
        <option value="default">Default Sort</option>
        <option value="title">Sort by title</option>
        <option value="lowTohigh">Sort by Price:Low - High</option>
        <option value="highTolow">Sort by Price:High - Low</option>
      </select>
    </div>      
  )
}