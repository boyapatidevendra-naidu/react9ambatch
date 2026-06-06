import React, { useState } from "react";
import Form from "./Form";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let loginData = [
    {
      name: "Email",
      type: "email",
      value: email,
      handleChange: handleEmail,
    },
    {
      name: "Password",
      type: "password",
      value: password,
      handleChange: handlePassword,
    },
  ];

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div>
      <Form data={loginData} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
