import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";

const FilterRating = () => {
  let products = useContext(productContext);

  let differentRatings = new Set(
    products.map((product) => product.rating.rate),
  );
  return (
    <div>
      {[...differentRatings].map((rate) => {
        return <button>{rate}</button>;
      })}
    </div>
  );
};

export default FilterRating;
