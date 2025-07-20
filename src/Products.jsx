import React, { useMemo } from 'react';
import {Link} from 'react-router-dom' // Corrected: useMemo is now importedimport { Link } from 'react-router-dom';
function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Products({ products }) {
    return (
    <div className="container max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8">
        {products.map(product => {
          const randomBgColor = useMemo(() => getRandomHexColor(), [product.id]);

          return (
            <div key={product.id} className="p-4 rounded-lg shadow-md bg-white flex flex-col h-full">
              <div
                className="flex justify-center items-center p-4 rounded-lg mb-4 h-48"
                style={{ backgroundColor: randomBgColor }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
                    <p className="text-gray-500 ">Rating: {product.rating} ({product.stock} in stock)</p>
                    
                    <p className='text-gray-500 text-sm mb-2'>Brand: {product.brand}</p>
                    <div>
                    <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                    <p className="text-xl font-bold mb-2">${product.price}</p>
                    
                    <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline container bg-red-100 p-2 rounded border border-red-500">
                        View Details    
                    </Link>
                    </div>
                </div>
            );
        })}
        
        </div>  
        </div>
    );
}
