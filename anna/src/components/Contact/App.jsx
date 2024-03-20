import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import AllGoods from './components/pages/AllGoods/AllGoods';
import Bag from './components/pages/Bag/Bag';
import BurgerMenu from './components/pages/BurgerMenu/BurgerMenu';
import CategoriesGoods from './components/pages/CategoriesGoods/CategoriesGoods';
import { CategoriesReview } from './components/pages/CategoriesReview/CategoriesReview';
import SaleGoods from './components/pages/SaleGoods/SaleGoods';
import OneProduct from './components/pages/OneProduct/OneProduct';
import NotFound from './components/pages/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/burger-menu" element={<BurgerMenu />} />
          <Route path="/categories-goods" element={<CategoriesGoods />} />
          <Route path="/categories-review" element={<CategoriesReview />} />
          <Route path="/sale-goods" element={<SaleGoods />} />
          <Route path="/all-goods" element={<AllGoods />} />
          <Route path="/one-product" element={<OneProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;