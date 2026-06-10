import { useState } from "react";
import Form from "./components/Form";
import DisplayProduct from "./components/DisplayProduct";
import Style from "./App.module.css";

const App = () => {
  // let [productDetails, setProductDetails] = useState([]);
  let [productDetails, setProductDetails] = useState({
    products: [],
    singleProduct: "",
  });

  let [details, setDetails] = useState({
    id: crypto.randomUUID(),
    productName: "",
    description: "",
    price: "",
    rating: "",
  });

  let handleChange = (e) => {
    let { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    updateProductDetails(details);
    setDetails({
      id: crypto.randomUUID(),
      productName: "",
      description: "",
      price: "",
      rating: "",
    });
  };

  let { products, singleProduct } = productDetails;
  // let updateProductDetails = (data) => {
  //   setProductDetails([...productDetails, data]);
  // };

  let updateProductDetails = (data) => {
    setProductDetails({ ...productDetails, products: [...products, data] });
  };

  let deleteProduct = (id) => {
    let filterProducts = products.filter((product) => product.id !== id);
    setProductDetails({ ...productDetails, products: filterProducts });
  };

  let editDetails = (id) => {
    let findProduct = products.find((product) => product.id === id);
    let filterProducts = products.filter((product) => product.id !== id);
    setProductDetails({ products: filterProducts, singleProduct: findProduct });
    setDetails({
      id: crypto.randomUUID(),
      productName: findProduct.productName,
      description: findProduct.description,
      price: findProduct.price,
      rating: findProduct.rating,
    });
  };
  return (
    <section className={Style.container}>
      <article className={Style.formContainer}>
        <Form
          updateProductDetails={updateProductDetails}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          details={details}
        />
      </article>
      <article className={Style.productContainer}>
        <DisplayProduct
          products={products}
          deleteProduct={deleteProduct}
          editDetails={editDetails}
        />
      </article>
    </section>
  );
};

export default App;
