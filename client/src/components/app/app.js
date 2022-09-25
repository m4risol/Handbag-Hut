import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@components/core";
import { Home, Product } from '@components';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/new" element={<Category/>}/> */}
           {/* <Route path="/bags" element={<Category/>}/> */}
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
