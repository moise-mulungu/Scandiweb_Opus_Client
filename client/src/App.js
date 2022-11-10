import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Books from './components/Books';
import Categories from './components/Categories';
import Products from './components/Products';
import AppNav from './components/Navigation';
// import { categoryToIdsMap } from './constants';

export default function App() {
  return (
    <div>
      <AppNav />
      <Routes>
        {/* <Route exact path="/" element={<Books />} /> */}
        <Route path="categoryToIdsMap/:id" component={Products} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}
