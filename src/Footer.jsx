import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-900 rounded-t-md w-full">
      <div className="flex flex-row justify-between items-center text-white p-6 w-full">
        <div className="m-6">
          <img src="/public/logo.png" className="mx-auto md:w-42 w-36" />
          <h2 className="text-4xl italic text-center text-red-400 font-Caveat">
            SnowDen
          </h2>
          <div className="flex justify-center mt-4 space-x-4">
            <img
              className="hover:bg-red-400 hover:rounded-lg"
              src="https://img.icons8.com/ios-filled/28/FFFFFF/instagram-new.png"
            />
            <img
              className="hover:bg-red-400 hover:rounded-lg"
              src="https://img.icons8.com/ios-filled/28/FFFFFF/twitter--v1.png"
            />
            <img
              className="hover:bg-red-400 hover:rounded-lg"
              src="https://img.icons8.com/ios-filled/28/FFFFFF/linkedin-2--v1.png"
            />
            <img
              className="hover:bg-red-400 hover:rounded-lg"
              src="https://img.icons8.com/ios-filled/28/FFFFFF/facebook-f.png"
            />
          </div>
        </div>

        </div>

      
    </div>
  );
}

export default Footer;
