import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Cart, Category } from "@components/core";
import { Home, Product, Products } from '@components';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bags" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/bags/:category" element={<Category/>} />
          <Route path="/bags/:id" element={<Product />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
