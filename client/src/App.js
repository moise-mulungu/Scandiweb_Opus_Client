import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { withRouter } from './utils';
import './App.css';
import AppNav from './components/Navigation';
import Products from './components/Products';
// import Product from './components/Product';
// import Cart from './components/Cart';

const WrappedProducts = withRouter(Products);
// const WrappedProduct = withRouter(Product);

export default function App() {
  return (
    <div>
      <AppNav />
      <Routes>
        <Route path="/" element={<WrappedProducts />} />
        <Route path="/:id" element={<WrappedProducts />} />
        {/* <Route path="product/:id" element={<WrappedProduct />} />
        <Route path="cart" element={<Cart />} /> */}
      </Routes>
    </div>
  );
}