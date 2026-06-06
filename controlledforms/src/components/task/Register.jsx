import React, { useState } from "react";
import Form from "./Form";

const Register = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let handleName = (e) => {
    setName(e.target.value);
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };
  let registerData = [
    {
      name: "Name",
      type: "text",
      value: name,
      handleChange: handleName,
    },
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
    console.log(name, email, password);
  };
  return (
    <div>
      <Form data={registerData} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
