import React from 'react';

export default function CartRow({ thumbnail, title, price, id, updateGlobalCart, localQuantities, setLocalQuantities }) {

  const numericPrice = parseFloat(price);

  function removeItem() {
    updateGlobalCart(id);
  }

  function updateLocalQuantity(event) {
    setLocalQuantities(prev => ({
      ...prev,
      [id]: event.target.value
    }));
  }

  const displayQuantity = parseFloat(localQuantities[id]) || 0;
  const subtotal = (numericPrice * displayQuantity).toFixed(2);

  return (
    <div className="border-b border-gray-200 hover:bg-gray-50 sm:grid grid-cols-5 gap-2 items-center">

      <div className='hidden sm:flex justify-start items-center px-5'>
        <div className="border h-5 w-5 flex items-center justify-center rounded-full border-gray-300 hover:bg-blue-100 mr-2">
          <button className="text-gray-400 hover:text-black text-sm" onClick={removeItem}>×</button>
        </div>
        <img
          className="size-16 object-cover rounded"
          src={thumbnail}
          alt={title}
        />
      </div>

      <div className="px-10 py-5 hidden sm:block text-left">
        <h1 className="text-sm text-gray-800 font-medium">{title}</h1>
      </div>

      <div className="text-gray-600 px-10 py-5 font-semibold hidden sm:block text-left">
        ${numericPrice.toFixed(2)}
      </div>

      <div className="px-10 py-5 hidden sm:block">
        <input
          type="number"
          value={localQuantities[id] ?? ''}
          onChange={updateLocalQuantity}
          min="0"
          className="text-gray-600 px-3 py-1 font-semibold text-center bg-red-50 rounded-lg border-2 border-blue-200 w-20 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="text-gray-600 px-10 py-5 font-semibold hidden sm:block text-right">
        ${subtotal}
      </div>

      <div className="sm:hidden p-4 border-b border-gray-200">
        <div className="flex items-start gap-4">
          <img
            className="size-20 object-cover rounded"
            src={thumbnail}
            alt={title}
          />
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-base text-gray-800 font-medium pr-2">{title}</h1>
              <button className="border h-6 w-6 flex items-center justify-center rounded-full border-gray-300 hover:bg-blue-100 flex-shrink-0" onClick={removeItem}>
                <span className="text-gray-400 hover:text-black text-sm">×</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Price: </span>
                <span className="text-gray-600 font-semibold">${numericPrice.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-gray-500">Qty: </span>
                <input
                  type="number"
                  value={localQuantities[id] ?? ''}
                  onChange={updateLocalQuantity}
                  min="0"
                  className="text-gray-600 font-semibold w-12 px-1 text-center border border-gray-300 rounded"
                />
              </div>
              <div className="col-span-2">
                <span className="text-gray-500">Total: </span>
                <span className="text-gray-600 font-semibold">${subtotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}