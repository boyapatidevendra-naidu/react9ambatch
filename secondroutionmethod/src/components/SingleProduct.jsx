import React from "react";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  let { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>{state.title}</h1>
      <p>{state.price}</p>
    </div>
  );
};

export default SingleProduct;
