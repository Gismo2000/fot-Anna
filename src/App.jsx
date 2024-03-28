// здесь правлю стили и адаптив

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/pages/MainPage/MainPage';
import CategoriesGoods from './components/pages/CategoriesGood/CategoriesGoods';
import AllProducts from './components/pages/AllProducts/AllProducts';
import AllSales from './components/pages/AllSales/AllSales';

import Favorites from './components/pages/Favorites/Favorites';
import Basket from './components/pages/Basket/Basket';
import BurgerMenu from './components/pages/BurgerMenu/BurgerMenu';

import OneProduct from './components/pages/OneProduct/OneProduct';
import NotFound from './components/pages/NotFound/NotFound';


function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories-goods" element={<CategoriesGoods />} />
          <Route path="/all_products" element={<AllProducts />} />
          <Route path="/all_sales" element={<AllSales />} />

          <Route path="/favorites" element={<Favorites />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/burger-menu" element={<BurgerMenu />} />
         
          <Route path="/one-product" element={<OneProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;