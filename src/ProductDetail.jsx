import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { LuCircleArrowLeft } from "react-icons/lu";

export default function ProductDetail() {
  const { state } = useLocation();
  const { id } = useParams();
  const [quantity, setQuantity] = useState("1");

  const product = state?.product;

  if (!product) {
    return (
      <div className="p-6">
        <p className="text-red-600">❌ Product not found or data not passed correctly.</p>
        <Link to="/" className="text-blue-600 underline">← Go back</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row py-4 px-8 my-4 bg-white gap-10 max-w-7xl relative">
      <Link className="p-2 text-2xl self-start absolute -top-8 left-0 bg-white" to="/">
        <LuCircleArrowLeft />
      </Link>

      <img className="md:w-[50%]" src={product.image} alt={product.title} />

      <div className="flex flex-col gap-4">
        <h1 className="text-gray-500 text-2xl md:text-5xl xl:text-6xl">{product.description}</h1>
        <h2 className="text-gray-600 text-xl md:text-4xl xl:text-5xl font-medium">
          ₹{product.price}
          {product.sale && (
            <span className="text-sm text-red-500 line-through ml-4">₹{product.saleprice}</span>
          )}
        </h2>
        <p className="text-gray-500 xl:text-xl">
          A great board for all kinds of riders. Durable, stylish, and smooth. Glide into the streets with confidence.
        </p>
        <div>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 p-1.5 text-center border mr-2 md:text-xl"
          />
          <button className="px-4 py-2 text-white bg-red-400 rounded-md md:text-xl">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

