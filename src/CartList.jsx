import React from 'react';
import CartRow from './CartRow';

export default function CartList({ products }) {
  const subtotal = products.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-white w-full flex flex-col items-end p-5">
      <table className="w-full border border-gray-200 text-right">
        <thead>
          <tr className="bg-gray-50 border-b-2 border-gray-200">
            <th className="font-semibold text-gray-600 py-4 px-10">Product</th>
            <th className="font-semibold text-gray-600 py-4 px-10">Price</th>
            <th className="font-semibold text-gray-600 py-4 px-10">Quantity</th>
            <th className="font-semibold text-gray-600 py-4 px-10">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <CartRow key={item.id} {...item} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input type="text" placeholder="Coupon code" className="border p-1 border-gray-300 my-4 mx-2" />
            </td>
            <td>
              <button className="text-white bg-red-500 px-4 py-1 border border-red-500 rounded-md ml-4 hover:bg-red-600">
                Apply Coupon
              </button>
            </td>
            <td></td>
            <td>
              <button className="text-white bg-red-400 px-4 py-1 border border-red-500 rounded-md mr-4">
                Update Cart
              </button>
            </td>
          </tr>
        </tfoot>
      </table>

      <table className="text-gray-600 border border-gray-300 mt-4 w-full md:w-1/2">
        <thead className="border-b border-gray-300 bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left">Cart Totals</th>
            <th className="py-3 px-4 text-right"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="p-3 font-semibold">Subtotal</td>
            <td className="p-3 text-right">${subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Total</td>
            <td className="p-3 text-right">${subtotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div className="p-4 border border-gray-300 w-full md:w-1/2 mt-4">
        <button className="w-full bg-red-500 py-2 text-white rounded-md hover:bg-red-600">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}
