// src/components/Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import OrdersPage from './OrdersPage';
import CartPage from './CartPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
