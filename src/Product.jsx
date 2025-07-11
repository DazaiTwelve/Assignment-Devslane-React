import React from "react";
import { Link } from "react-router-dom";

export default function Product({ image, title, description, price, sale, saleprice }) {
  return (
    <div className="max-w-46 bg-white relative p-2 rounded shadow">
      <img className="w-full h-56 object-cover" src={image} alt="product" />
      <h1 className="text-gray-400 text-xs py-1">{title}</h1>
      <p className="text-sm pb-1 font-medium">{description}</p>

      {sale === "Sale" && (
        <p className="inline text-xs text-gray-400 mr-1 line-through">₹{saleprice}</p>
      )}
      <p className="text-xs font-medium inline">₹{price}</p>

      {sale === "Sale" && (
        <div className="bg-red-400 text-xs rounded-full h-6 w-6 flex items-center justify-center absolute top-2 right-2 text-white">
          {sale}
        </div>
      )}

      <Link to="/product/1" className="text-blue-500 block mt-2">
        View Details
      </Link>
    </div>
  );
}
