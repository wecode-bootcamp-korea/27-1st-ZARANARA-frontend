import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import ProductList from './pages/Product_list/productList/ProductList';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';

const Router = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/category/:id" element={<ProductList />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
