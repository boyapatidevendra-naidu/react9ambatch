import React from "react";
import ReactDom from "react-dom/client";

// console.log(React);
// console.log(ReactDom);

// let jsElement = document.createElement("h1");
// jsElement.innerHTML = "I am a h1 tag by js";
// console.log(jsElement);
// ! Syntax of React element
// @ React.createElement("tagname",{attributes},"Content")
let reactElement = React.createElement("h1", null, "I am a h1 tag by react");
console.log(reactElement);
let productTitle = React.createElement("p", null, "Product Name: Mobile");
let productPrice = React.createElement("p", null, "ProductPrice: 25000 RS");
let addToCartButton = React.createElement("button", null, "Add To Cart");
let container = React.createElement(
  "article",
  null,
  productTitle,
  productPrice,
  addToCartButton,
);
let container1 = React.createElement(
  "article",
  null,
  React.createElement("p", null, "Product Name: Mobile"),
  React.createElement("p", null, "Product Price: 30000"),
  React.createElement("button", null, "Add To Cart"),
);

let parentContainer = React.createElement(
  "article",
  null,
  container,
  container1,
);
ReactDom.createRoot(document.getElementById("root")).render(parentContainer);
