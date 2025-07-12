import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-blue-700 flex justify-between items-center py-2 px-4 text-xs text-white">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvyXwAKS6tK0RrYbkvupD9O1IbLGBBQPEkQ&s"
            alt="Logo"
          />
        </Link>
      </div>

      <Link to="/cart" className="hover:text-gray-200">
        <ShoppingCart className="w-6 h-6" />
      </Link>
    </div>
  );
}
