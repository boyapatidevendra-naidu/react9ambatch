import React from "react";
import UncontrolledForms from "./components/UncontrolledForms";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <div>
      {/* <UncontrolledForms /> */}
      <Register />
      <hr />
      <Login />
    </div>
  );
};

export default App;
