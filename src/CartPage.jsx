import React from 'react';
import CartData from './CartData';
import CartList from './CartList';

export default function CartPage() {
  return (
    <div className="p-6">
      <CartList products={CartData} />
    </div>
  );
}
