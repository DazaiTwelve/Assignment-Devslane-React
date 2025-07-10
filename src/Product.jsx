import React, { useState, useEffect } from "react";
export default function Product({ image, title, description, price }) {
  return (
    <div className="max-w-46 bg-white relative p-2">
      <img className="w-full h-56" src={image} alt="product" />
      <h1 className="text-gray-400 text-xs py-1">{title}</h1>
      <p className="text-sm pb-1 font-medium">{description}</p>
      <p className="text-xs font-medium inline">INR{price}</p>
    </div>
  );
}
