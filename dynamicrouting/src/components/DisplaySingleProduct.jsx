import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../utilities";

const DisplaySingleProduct = () => {
  let { id } = useParams();
  let data = useContext(productContext);

  console.log(data)
  console.log(id)
  let filterProduct = data.find((product) => product.id === Number(id));
  console.log(filterProduct)
  return (
    <article>
      <h1>Title: {filterProduct.title}</h1>
      <p>Description: {filterProduct.description}</p>
      <button>Add To Cart</button>
    </article>
  );
};

export default DisplaySingleProduct;
