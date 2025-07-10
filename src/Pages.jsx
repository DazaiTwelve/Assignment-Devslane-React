import React, { useState, useEffect } from "react";

export default function Pages(){
  return (
    <div className="w-full flex gap-1 md:justify-start pl-2 justify-center">
      <a className="p-2 text-white bg-red-400 h-10 w-10 text-center">1</a>
      <a className="p-2 w-10 h-10 text-center text-red-500 border border-red-400">2</a>
      <a className="p-2 w-10 h-10 text-center text-red-500 border border-red-400">3</a> 
      <a className="p-2 w-10 h-10 text-center text-red-500 border border-red-400">4</a>
      <a className="p-2 w-10 h-10 text-center text-red-500 border border-red-400">...</a>    </div>      
  )
} 