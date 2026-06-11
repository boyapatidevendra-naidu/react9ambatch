import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";

const Product = () => {
  let products = useContext(productContext);
  console.log(products);

  let newProducts = new Set(products.map((product) => product.category));
  console.log(newProducts);
  return (
    <div>
      {[...newProducts].map((product) => {
        return <button>{product}</button>;
      })}
    </div>
  );
};

export default Product;
