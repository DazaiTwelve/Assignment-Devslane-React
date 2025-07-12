import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product, index }) {
  if (!product) return null;

  return (
    <Link
      to={`/product/${index}`}
      state={{ product }}
      className="w-64 block p-4 bg-white rounded shadow hover:shadow-md"
    >
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="mt-2 text-red-600 font-bold">₹{product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
        View Details
      </button>
    </Link>
  );
}