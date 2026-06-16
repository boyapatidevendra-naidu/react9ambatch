import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../utilities";
import Product from "./Product";

const DisplayProducts = () => {
  let data = useContext(productContext);
  let navigate = useNavigate();

  let goToSingleProduct = () => {
    navigate("/singleProduct");
  };
  return (
    <div>
      <Link to="/singleProduct">Single Product</Link>
      {data.map((product) => {
        return (
          <article>
            <Product data={product} goto={goToSingleProduct} />
          </article>
        );
      })}
    </div>
  );
};

export default DisplayProducts;
