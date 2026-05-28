import React, { useState } from "react";
import DispalyProduct from "./DispalyProduct";

const FilterTheProducts = () => {
  let [category, setCategory] = useState("");
  let products = [
    {
      name: "Shirt",
      category: "men",
    },
    {
      name: "Jeans",
      category: "men",
    },
    {
      name: "Kurtha",
      category: "women",
    },
    {
      name: "Women Shirt",
      category: "women",
    },
    {
      name: "Kids -Shirt",
      category: "kids",
    },
    {
      name: "Kids -Jeans",
      category: "kids",
    },
  ];

  let filterData = products.filter((product) => product.category === category);
  return (
    <div>
      <button onClick={() => setCategory("men")}>Men</button>
      <button onClick={() => setCategory("women")}>Women</button>
      <button onClick={() => setCategory("kids")}>Kids</button>

      <section>
        {filterData.length > 0 ? (
          <DispalyProduct products={filterData} />
        ) : (
          <DispalyProduct products={products} />
        )}
      </section>
    </div>
  );
};

export default FilterTheProducts;
