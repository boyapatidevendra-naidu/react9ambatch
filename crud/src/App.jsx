import React, { useState } from "react";
import Form from "./components/Form";
import DisplayProduct from "./components/DisplayProduct";
import Style from "./App.module.css";

const App = () => {
  let [productDetails, setProductDetails] = useState([]);

  let updateProductDetails = (data) => {
    setProductDetails([...productDetails, data]);
  };
  console.log(productDetails)
  return (
    <section className={Style.container}>
      <article className={Style.formContainer}>
        <Form updateProductDetails={updateProductDetails} />
      </article>
      <article className={Style.productContainer}>
        <DisplayProduct products={productDetails} />
      </article>
    </section>
  );
};

export default App;
