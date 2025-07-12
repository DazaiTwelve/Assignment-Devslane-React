import React from 'react';

export default function CartRow({ image, description, price, quantity }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-10 py-5 min-w-80">
        <div className="flex items-center space-x-4">
          <div className="border h-5 w-5 flex items-center justify-center rounded-full border-gray-300">
            <button className="mb-1 text-gray-400">x</button>
          </div>
          <img className="w-16 h-16 object-cover" src={image} alt={description} />
          <span className="text-sm text-red-500 font-medium">{description}</span>
        </div>
      </td>
      <td className="text-gray-600 px-10 py-5 font-semibold">${price}</td>
      <td className="text-gray-600 px-10 py-5 font-semibold">{quantity}</td>
      <td className="text-gray-600 px-10 py-5 font-semibold">${(price * quantity).toFixed(2)}</td>
    </tr>
  );
}
