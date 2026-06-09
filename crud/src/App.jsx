import React, { useState } from "react";
import Form from "./components/Form";
import DisplayProduct from "./components/DisplayProduct";
import Style from "./App.module.css";

const App = () => {
  // let [productDetails, setProductDetails] = useState([]);
  let [productDetails, setProductDetails] = useState({
    products: [],
    singleProduct: "",
  });

  let { products, singleProduct } = productDetails;
  // let updateProductDetails = (data) => {
  //   setProductDetails([...productDetails, data]);
  // };

  let updateProductDetails = (data) => {
    setProductDetails({ ...productDetails, products: [...products, data] });
  };

  let deleteProduct = (id) => {
    let filterProducts = productDetails.filter((product) => product.id !== id);
    setProductDetails({ ...productDetails, products: filterProducts });
  };

  let editDetails = (id) => {
    let findProduct = productDetails.find((product) => product.id === id);
  };
  console.log(productDetails);
  return (
    <section className={Style.container}>
      <article className={Style.formContainer}>
        <Form updateProductDetails={updateProductDetails} />
      </article>
      <article className={Style.productContainer}>
        <DisplayProduct products={products} deleteProduct={deleteProduct} />
      </article>
    </section>
  );
};

export default App;
