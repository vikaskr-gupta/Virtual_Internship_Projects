// src/components/MenuPage.jsx
import React from 'react';

const MenuPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Add menu items here */}
        <div className="bg-gray-200 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Paneer</h3>
          <p className="text-gray-600">Sahi Paneer.</p>
          <p className="text-green-600 font-bold">Rate:- 150</p>
        </div>
        <div className="bg-gray-200 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Pizza</h3>
          <p className="text-gray-600">Vegitable Pizza 7".</p>
          <p className="text-green-600 font-bold">Rate:- 299</p>
        </div>
        <div className="bg-gray-200 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Burgur</h3>
          <p className="text-gray-600">Veg Burgur.</p>
          <p className="text-green-600 font-bold">Rate:- 99</p>
        </div>
        <div className="bg-gray-200 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Chapati</h3>
          <p className="text-gray-600">Chapati with Butter.</p>
          <p className="text-green-600 font-bold">Rate:- 5</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
