import React, { useState } from "react";
import Form1 from "./Form1";

const Login1 = () => {
  let [details, setDetails] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    let { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  let { email, password } = details;

  let loginData = [
    {
      name: "email",
      type: "email",
      value: email,
    },
    {
      name: "password",
      type: "password",
      value: password,
    },
  ];
  return (
    <div>
      <Form1
        data={loginData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login1;
