import { useState } from "react";

const Conditional = () => {
  let [login, setLogin] = useState(false);

  let loginValue = () => {
    if (login === true) {
      return <h1>Login Successful</h1>;
    } else {
      return <h1>User Not Found</h1>;
    }
  };
  return (
    <div>
      {loginValue()}
      <p>{login === true && "Welcome To React"}</p>
      <button onClick={() => setLogin(true)}>login</button>
      <button onClick={() => setLogin(false)}>Logout</button>

      <hr />
      <h1>{login === true ? "Login Successful" : "User Not Found"}</h1>
      <p>{login === true && "Welcome To React"}</p>
      <button onClick={() => setLogin(!login)}>
        {login === true ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Conditional;
