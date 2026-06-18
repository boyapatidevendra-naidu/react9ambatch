import React, { useContext } from "react";
import { productContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const SingleProductWithFetching = () => {
  let products = useContext(productContext);
  let { id } = useParams();
  let filterData = products.find((product) => product.id == id);
  return (
    <div>
      <h1>Title: {filterData.title}</h1>
      <p>Price: {filterData.price}</p>
    </div>
  );
};

export default SingleProductWithFetching;
