import React, { useState } from "react";

const Form = ({ updateProductDetails }) => {
  let [details, setDetails] = useState({
    productName: "",
    description: "",
    price: "",
    rating: "",
  });

  let { productName, description, price, rating } = details;

  let handleChange = (e) => {
    let { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    updateProductDetails(details);
    setDetails({
      productName: "",
      description: "",
      price: "",
      rating: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <aside style={{ textAlign: "center" }}>
        <h1>
          <u>
            <i>Product From</i>
          </u>
        </h1>
      </aside>
      <aside>
        <label htmlFor="">Product Name: </label>
        <input
          type="text"
          name="productName"
          value={productName}
          placeholder="Enter Your Product Name"
          onChange={handleChange}
        />
      </aside>
      <aside>
        <label htmlFor="">Description: </label>
        <textarea
          name="description"
          id="description"
          placeholder="Enter Your Description"
          value={description}
          onChange={handleChange}
        ></textarea>
      </aside>
      <aside>
        <label htmlFor="">Product Price</label>
        <input
          type="number"
          name="price"
          value={price}
          placeholder="Enter The Product Price"
          onChange={handleChange}
        />
      </aside>
      <aside>
        <label htmlFor="">Product Rating</label>
        <input
          type="number"
          value={rating}
          name="rating"
          placeholder="Enter The Product Rating"
          onChange={handleChange}
        />
      </aside>
      <aside style={{ textAlign: "center" }}>
        <button>Submit</button>
      </aside>
    </form>
  );
};

export default Form;
