import React, { useState, useEffect } from 'react';
import CartList from './CartList.jsx';
import { getProduct } from './database.js';
import Loading from './Loading.jsx';

export default function CartPage({ Cart, updateCart }) {
  const [cartData, updateCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localQuantities, setLocalQuantities] = useState({}); 

  useEffect(() => {
    const initialLocal = {};
    for (const productId in Cart) {
      initialLocal[productId] = Cart[productId];
    }
    setLocalQuantities(initialLocal);
  }, [Cart]);

  useEffect(() => {
    setLoading(true);
    const productIdsInCart = Object.keys(Cart || {}); 

    if (productIdsInCart.length === 0) {
      updateCartData([]);
      setLoading(false);
      return; 
    }

    const promises = productIdsInCart.map(productId =>
      getProduct(productId).then(response => ({
        ...response.data,
        quantityInCart: Cart[productId]
      }))
    );

    Promise.all(promises)
      .then(response => {
        console.log("data in response: ", response);
        updateCartData(response);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching cart products:", error);
        setLoading(false);
        updateCartData([]);
      });
  }, [Cart]); 
  const handleRemoveCart = (productId) => {
    const newCart = { ...Cart };
    delete newCart[productId];
    updateCart(newCart);
  };

  if (Object.keys(Cart).length === 0) {
    return <div className='text-4xl font-black md:text-9xl w-full text-center'>Cart is empty</div>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <CartList
      products={cartData}
      handleRemoveCart={handleRemoveCart}
      localQuantities={localQuantities}
      setLocalQuantities={setLocalQuantities}
      updateCart={updateCart}
    />
  );
}