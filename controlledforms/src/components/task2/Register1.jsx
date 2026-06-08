import React, { useState } from "react";
import Form1 from "./Form1";

const Register1 = () => {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  let { name, email, password } = details;

  let registerData = [
    {
      name: "name",
      type: "text",
      value: name,
    },
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

  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <div>
      <Form1
        data={registerData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register1;
