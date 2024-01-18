// src/components/CartPage.jsx
import React from 'react';

const CartPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="flex justify-between items-center border-b-2 py-2 mb-4">
        <span className="font-semibold">Paneer</span>
        <span className="text-green-600 font-bold">150</span>
      </div>
      <div className="flex justify-between items-center border-b-2 py-2 mb-4">
        <span className="font-semibold">Pizza</span>
        <span className="text-green-600 font-bold">299</span>
      </div>
      <div className="flex justify-between items-center border-b-2 py-2 mb-4">
        <span className="font-semibold">Burger</span>
        <span className="text-green-600 font-bold">99</span>
      </div>
      <div className="flex justify-between items-center border-b-2 py-2 mb-4">
        <span className="font-semibold">Chapati</span>
        <span className="text-green-600 font-bold">25</span>
      </div>
      <div className="mt-4">
        <p className="text-lg font-bold">Total: 573</p>
        <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
