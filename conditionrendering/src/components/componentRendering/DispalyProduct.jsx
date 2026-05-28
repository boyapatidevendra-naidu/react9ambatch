import React from "react";

const DispalyProduct = ({products}) => {
  return (
    <div>
      {products.map((value) => {
        return (
          <article>
            <p>Product Name: {value.name}</p>
            <p>Product Category: {value.category}</p>
            <button>Add To Cart</button>
          </article>
        );
      })}
    </div>
  );
};

export default DispalyProduct;
