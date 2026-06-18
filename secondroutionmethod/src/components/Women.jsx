import React, { useContext } from "react";
import { productContext } from "./../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Women = () => {
  let products = useContext(productContext);
  let navigate = useNavigate();

  let navigateToSingleProduct = (id) => {
    navigate(`/singleProductFetching/${id}`);
  };
  return (
    <div>
      {products.map((product) => {
        return (
          <article>
            <h1>Title: {product.title}</h1>
            <p>Price: {product.price}</p>
            <button onClick={() => navigateToSingleProduct(product.id)}>
              View More
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default Women;
