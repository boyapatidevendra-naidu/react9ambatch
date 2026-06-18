import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Products from "../components/Products";
import Men from "../components/Men";
import Women from "../components/Women";
import Kind from "../components/Kind";
import SingleProduct from "../components/SingleProduct";
import SingleProductWithFetching from "../components/SingleProductWithFetching";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "/products/men",
            element: <Men />,
          },
          {
            path: "/products/women",
            element: <Women />,
          },
          {
            path: "/products/kids",
            element: <Kind />,
          },
        ],
      },
      {
        path: "/singleProduct",
        element: <SingleProduct />,
      },
      {
        path: "/singleProductFetching/:id",
        element: <SingleProductWithFetching />,
      },
    ],
  },
]);

export default routes;
