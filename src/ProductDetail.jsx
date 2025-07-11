import React, { useState } from 'react';

export default function ProductDetail() {
  const [val, updateVal] = useState(1);

  return (
    <div className="flex flex-col md:flex-row py-4 px-8 my-4 bg-white gap-10">
      <img
        className="md:w-1/3 rounded-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFUV-VNjIKhFbv9r2WYrRFUkHjpWDvm74qA&s"
        alt="DOM Board"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-gray-500 text-2xl md:text-5xl xl:text-6xl">DOM Board</h1>
        <h2 className="text-gray-600 text-xl md:text-4xl xl:text-5xl font-medium">₹100.00</h2>
        <p className="text-gray-500 xl:text-xl">
          Great board — must try, one of the best options for skaters.
        </p>
        <div>
          <input
            type="number"
            value={val}
            onChange={(e) => updateVal(e.target.value)}
            className="w-12 p-1.5 text-center border mr-2 md:text-xl"
          />
          <button className="px-4 py-2 text-white bg-red-400 rounded-md md:text-xl">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
