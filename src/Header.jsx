import React from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

export default function Header({ totalQuantity }) {  
  return (
    <div className="flex items-center justify-between w-full py-2 bg-rose-200">
      <div>
        <Link to="/" className="w-32 h-14 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="SnowDen Logo"
          className="max-w-full max-h-full object-contain"
        />
      </Link>
      </div>
      <header className="flex justify-between w-full text-white p-2 items-center md:px-8 mx-auto">
      
      <h1 className="text-center text-2xl text-blue-700">
        Snow<span className='text-red-700 text-2xl'>Den</span>
      </h1>
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-black hover:text-gray-300 inline-flex font-bold items-center text-base">
            Home
          </Link>
          <Link to="/about" className="text-black hover:text-gray-300 inline-flex font-bold items-center text-base">
            About
          </Link>
          <Link to="/log-in" className="text-black hover:text-gray-300 inline-flex font-bold items-center text-base">
            Login
          </Link>
          <Link to="/sign-Up" className="text-black hover:text-gray-300 inline-flex font-bold items-center text-base">
            Sign Up
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
        <Link to="log-in">
          {" "}
          <VscAccount className="text-4xl text-red-400" />
          {" "}
        </Link>
        <Link to="/cart" className="relative flex items-center justify-center">
          <div className="m-2 text-5xl text-red-400">
            {" "}
            <FaOpencart />{" "}
          </div>
          <span className="absolute p-2 text-lg text-red-400 rounded-full">
            {totalQuantity > 0 && (
                <span>
                  {totalQuantity}
                </span>
              )}
          </span>
        </Link>
      </div>
      </div>
    </header>

      
    </div>
  );
}
