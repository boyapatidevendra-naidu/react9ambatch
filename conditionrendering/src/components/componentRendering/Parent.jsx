import { useState } from "react";
import Loading from "./Loading";
import Data from "./Data";

const Parent = () => {
  let [login, setLogin] = useState(false);

  let rendering = () => {
    if (login) {
      return <Data />;
    } else {
      return <Loading />;
    }
  };

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

  return (
    <div>
      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
      {/* {!login ? <Loading /> : <Data />} */}
      {rendering()}

      <button>Men</button>
      <button>Women</button>
      <button>Kids</button>

      {products.map((value) => {
        return (
          <article>
            <p>Product Name :{value.name}</p>
            <p>Product Category: {value.category}</p>
            <button>Add To Cart</button>
          </article>
        );
      })}
    </div>
  );
};

export default Parent;
