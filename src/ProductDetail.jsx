import React from 'react'

export default function ProductDetail(){
  return (
    <div className="flex flex-col md:flex-row py-4 px-8 my-4 bg-white gap-10">
      <img className='md:w-[50%]'
        src="https://img.freepik.com/premium-photo/tshirt-mockup_925962-903.jpg"/>
      <div className='flex flex-col gap-4'>
        <h1 className="text-gray-500  text-2xl md:text-5xl xl:text-6xl">Black Printed T-Shirt</h1>
        <h2 className="text-gray-600 text-xl md:text-4xl xl:text-5xl font-medium">$10.00</h2>
        <p className="text-gray-500 xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div>
          <input type="text" value={1} className='w-9 p-1.5 text-center  border mr-1 md:text-xl'/>
          <button className="px-4 py-2 text-white bg-red-400 rounded-md md:text-xl">ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}