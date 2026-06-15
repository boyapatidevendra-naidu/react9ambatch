import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Men from "./components/productCategory/Men";
import Women from "./components/productCategory/Women";
import Kids from "./components/productCategory/Kids";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />}>
          <Route path="/products/men" element={<Men />} />
          <Route path="/products/women" element={<Women />} />
          <Route path="/products/kids" element={<Kids />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
