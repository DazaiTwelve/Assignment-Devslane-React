import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./Header.jsx";
import ProductList from "./ProductList.jsx";
import ProductDetail from './ProductDetail.jsx';
import Footer from './Footer.jsx';
import CartPage from './CartPage.jsx';
import NotFound from './NotFound.jsx';
import SignUp from './SignUp.jsx';
import Login from './LogIn.jsx';
import ForgotPswd from './ForgotPswd.jsx';

export default function App() {
  const [cart, setCart] = useState(function() {
    try {
      const savedData = localStorage.getItem("my-cart");
      return savedData ? JSON.parse(savedData) : {};
    } catch (error) {
      console.error("Failed to parse cart from localStorage on init:", error);
      return {}; 
    }
  });

  useEffect(function() {
    localStorage.setItem("my-cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = useCallback((itemToAdd) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      const currentQuantity = newCart[itemToAdd.id] || 0;
      newCart[itemToAdd.id] = currentQuantity + itemToAdd.quantity;
      return newCart;
    });
    console.log(`Added ${itemToAdd.quantity} of ${itemToAdd.title} to cart!`);
  }, []);

  const totalQuantity = useMemo(() => {
    const tQ = Object.values(cart).reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    return tQ;
  }, [cart]);

  return (
    <>
      <Header totalQuantity={totalQuantity} /> 
      <div className="flex flex-col items-center w-full justify-between min-h-screen bg-rose-300">
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<ProductDetail onCartChange={handleAddToCart} />}></Route>
          <Route path="/cart" element={<CartPage Cart={cart} updateCart={setCart} />} />
          <Route path='*' element={<NotFound />} />

          <Route path="sign-Up" element={<SignUp />} />
          <Route path="/*/forgotpswd" element={<ForgotPswd />} />
          <Route path="log-in" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}