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



  return (
    <div>
      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
      {/* {!login ? <Loading /> : <Data />} */}
      {rendering()}

     

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
