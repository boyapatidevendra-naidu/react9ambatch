import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <nav>
        <Link to="/products/men">Men</Link>
        <Link to="/products/women">Women</Link>
        <Link to="/products/kids">Kids</Link>
      </nav>
      <article>
        <Outlet />
      </article>
    </section>
  );
};

export default Products;
