import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Cart } from "@components/core";
import { Home, Product } from '@components';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/bags/:id" element={<Product />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
