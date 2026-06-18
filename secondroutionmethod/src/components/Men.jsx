import React from "react";
import { NavLink } from "react-router-dom";

const Men = () => {
  let products = [
    {
      id: 1,
      title: "Men shirt",
      price: 1000,
    },
    {
      id: 2,
      title: "Men Jeans shirt",
      price: 1000,
    },
    {
      id: 3,
      title: "Jeans",
      price: 1000,
    },
    {
      id: 4,
      title: "T-shirt ",
      price: 1000,
    },
  ];
  return (
    <div>
      {products.map((product) => {
        return (
          <article>
            <h1>Title: {product.title}</h1>
            <p>Price: {product.price}</p>
            <NavLink to="/singleProduct" state={product}>
              View More
            </NavLink>
          </article>
        );
      })}
    </div>
  );
};

export default Men;
