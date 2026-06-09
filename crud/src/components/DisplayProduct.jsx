import { useState } from "react";

const DisplayProduct = ({ products, deleteProduct }) => {
  // let [productValues, setProductValues] = useState(null);
  let deleteButton = {
    backgroundColor: "red",
  };
  let editButton = {
    backgroundColor: "navy",
  };

  let buttonContainer = {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: "10px",
  };

  let button = {
    fontSize: "20px",
    fontWeight: "500",
    padding: "10px",
    borderRadius: "20px",
    backgroundColor: "navy",
    color: "white",
  };

  // let deleteProduct = (id) => {
  //   let filterProducts = products.filter((product) => product.id != id);
  //   setProductValues(filterProducts);
  // };
  // console.log(productValues);

  // let fetchProducts = () => {
  //   if (productValues === null) {
  //     return products;
  //   } else {
  //     return productValues;
  //   }
  // };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div style={buttonContainer}>
        <button style={button}>All</button>
        <button style={button}>Rating 2</button>
        <button style={button}>Rating 3</button>
        <button style={button}>Rating 4</button>
        <button style={button}>Rating 5</button>
      </div>
      {products.map((product) => {
        return (
          <aside>
            <p>
              Product Name: <strong>{product.productName} </strong>
            </p>
            <p>Product Description: {product.description} </p>
            <p>Product Price: {product.price} </p>
            <p>Product Rating: {product.rating} </p>
            <div>
              <button style={editButton}>Edit</button>
              <button
                style={deleteButton}
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </aside>
        );
      })}
    </div>
  );
};

export default DisplayProduct;
