import React from "react";
import Form from "./Form";

const Register = () => {
  let registerData = [
    {
      name: "Username",
      type: "text",
      placeholder: "Enter Your Username",
    },
    {
      name: "Email",
      type: "email",
      placeholder: "Enter Your Email",
    },
    {
      name: "Password",
      type: "password",
      placeholder: "Enter Your Password",
    },
  ];
  return <div>
    <Form data={registerData}/>
  </div>;
};

export default Register;
