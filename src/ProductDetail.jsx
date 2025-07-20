// ProductDetail.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFound from './NotFound'; // Assuming this component exists
import Loading from './Loading';   // Assuming this component exists
// Removed unused react-icons imports for cleanliness: IoArrowBackCircleOutline, TiTick, FcPrevious, FcNext
// Removed unused Button import, as it's not present in the provided snippet

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function ProductDetail({ onCartChange }) { // onCartChange is the prop to send data to parent
  console.log("ProductDetail component rendered");
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const randomBgColor = useMemo(() => getRandomHexColor(), [id]);

  const handleQuantityChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value, 10) || 1);
    setQuantity(value);
  };

  const handleAddToCart = () => { // This function is triggered when the button is clicked
    if (!product) {
      console.warn("Cannot add to cart: Product data not loaded.");
      return;
    }
    // This is the key part: it calls the 'onCartChange' prop with the item details.
    // 'onCartChange' is expected to be a function provided by the parent (App.jsx)
    // that handles adding the item to the global cart state and localStorage.
    if (onCartChange) {
      onCartChange({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail, // Sending thumbnail for cart display
        quantity: quantity // Sending the selected quantity
      });
      alert(`${quantity} of ${product.title} added to cart!`); // Provides immediate user feedback
    } else {
      console.warn("onCartChange prop is not provided to ProductDetail. Cart functionality is not connected.");
      alert(`${quantity} of ${product.title} selected, but cart functionality is not connected.`);
    }
  };

  useEffect(() => {
    // Page background management
    document.body.classList.add('bg-yellow-100');
    document.body.classList.add('min-h-screen');

    const source = axios.CancelToken.source();

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      setQuantity(1); // Reset quantity to 1 when a new product is loaded
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`, {
          cancelToken: source.token
        });
        setProduct(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request cancelled:', err.message);
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      document.body.classList.remove('bg-yellow-100');
      document.body.classList.remove('min-h-screen');
      source.cancel('ProductDetail component unmounted or ID changed');
    };
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div className="text-center p-8 text-lg text-red-600">Error loading product: {error.message}</div>;
  }
  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg my-8">
      <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
      <div
        className="flex justify-center items-center p-4 rounded-lg mb-4"
        style={{ backgroundColor: randomBgColor }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-w-full max-h-64 object-contain"
        />
      </div>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 mr-1">Rating: {product.rating}</span>
        <span className="text-gray-500">({product.stock} in stock)</span>

        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          max={product.stock}
          className='w-20 p-1.5 text-center border border-gray-400 rounded-md ml-4'
        />

        {/* The onClick event calls handleAddToCart, which then uses the onCartChange prop */}
        <button
          onClick={handleAddToCart}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}