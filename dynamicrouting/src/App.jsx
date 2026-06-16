import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import DisplayProducts from "./components/DisplayProducts";
import DisplaySingleProduct from "./components/DisplaySingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayProducts />} />
        <Route path="/singleProduct" element={<DisplaySingleProduct />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
};

export default App;
