import React from 'react';
import CartRow from './CartRow.jsx';

export default function CartList({ products, handleRemoveCart, localQuantities, setLocalQuantities, updateCart }) {

  const subtotal = products.reduce((acc, item) => acc + (item.price * item.quantityInCart), 0).toFixed(2);
  const total = subtotal;

  function handleUpdateCart() {
    const newGlobalCart = {};
    for (const productId in localQuantities) {
      const quantity = Math.max(0, parseInt(localQuantities[productId], 10) || 0);
      if (quantity > 0) {
        newGlobalCart[productId] = quantity;
      }
    }
    updateCart(newGlobalCart);
  }

  return (
    <div className="bg-white w-full flex flex-col items-end p-5">
      <div className="w-full border border-gray-200 text-right">
        <div className="bg-gray-50 border-b-2 border-gray-200 sm:grid grid-cols-5 gap-4 hidden">
          <div></div>
          <div className="font-semibold text-gray-600 py-4 px-10 text-left">Product</div>
          <div className="font-semibold text-gray-600 py-4 px-10 text-left">Price</div>
          <div className="font-semibold text-gray-600 py-4 px-10 text-left">Quantity</div>
          <div className="font-semibold text-gray-600 py-4 px-10 text-right">Subtotal</div>
        </div>

        <div>
          {products.map(item => (
            <CartRow
              key={item.id}
              {...item}
              updateGlobalCart={handleRemoveCart}
              localQuantities={localQuantities}
              setLocalQuantities={setLocalQuantities}
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-4 gap-2 sm:items-center grid-cols-1 p-2 border-t border-gray-200 pt-4">
          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <input
                type="text"
                placeholder="Coupon code"
                className="border p-2 border-gray-300 rounded-lg w-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <button className="text-white bg-blue-500 px-4 py-2 rounded-lg w-full sm:w-auto hover:bg-blue-600 transition duration-200">
                Apply Coupon
              </button>
            </div>
          </div>
          <div className="hidden sm:block"></div>
          <div>
            <button
              onClick={handleUpdateCart}
              className="text-white bg-blue-400 px-4 py-2 rounded-lg w-full sm:w-auto hover:bg-blue-500 transition duration-200"
            >
              Update Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-sm w-full text-gray-600 border border-gray-300 mt-4 hidden sm:block rounded-b-lg ml-auto">
        <div className="border-b border-gray-300 bg-gray-50 grid grid-cols-2">
          <div className="py-3 font-semibold px-4 text-left">Cart Totals</div>
          <div></div>
        </div>
        <div>
          <div className="border-b border-gray-300 grid grid-cols-2">
            <div className="p-3 font-semibold text-left">Subtotal</div>
            <div className="p-3 text-right">${subtotal}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-3 font-semibold text-left">Total</div>
            <div className="p-3 text-right font-bold text-lg text-red-600">${total}</div>
          </div>
        </div>
        <button className="w-full py-4 text-white rounded-b-lg font-semibold text-lg bg-blue-600 hover:bg-blue-700 transition duration-200">
          PROCEED TO CHECKOUT
        </button>
      </div>

      <div className='sm:hidden mt-6 w-full'>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-4 shadow-sm border border-gray-200">
          <h3 className="text-gray-700 font-semibold mb-3 text-center">Cart Totals</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b px-1 border-gray-200">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${subtotal}</span>
            </div>
            <div className="flex justify-between items-center py-3 bg-red-50 rounded-lg px-1 mt-3">
              <span className="text-gray-700 font-semibold">Total</span>
              <span className="font-bold text-red-600 text-lg">${total}</span>
            </div>
          </div>
        </div>
        <button className="w-full py-4 text-white rounded-lg font-semibold text-lg bg-blue-600 hover:bg-blue-700 transition duration-200">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}