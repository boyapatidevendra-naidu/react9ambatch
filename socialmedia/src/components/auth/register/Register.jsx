import { Fragment, useContext, useEffect, useState } from "react";
import Form from "../Form";
import { authContext } from "../../../Utilities";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    current_password: "",
    confirm_password: "",
    gender: "",
    dob: "",
    mobile: "",
    username: "",
  });

  let { addUser, addResponse } = useContext(authContext);
  let {
    name,
    email,
    current_password,
    gender,
    dob,
    mobile,
    username,
    confirm_password,
  } = details;
  let registerData = [
    {
      name: "name",
      type: "text",
      value: name,
      placeholder: "Enter Your Name",
      label: "Name",
    },
    {
      name: "email",
      type: "email",
      value: email,
      placeholder: "Enter Your Email",
      label: "Email",
    },
    {
      name: "current_password",
      type: "password",
      value: current_password,
      placeholder: "Enter Your Password",
      label: "Password",
    },
    {
      name: "confirm_password",
      type: "password",
      value: confirm_password,
      placeholder: "Enter Your Password",
      label: "Confirm Password",
    },
    {
      name: "dob",
      type: "date",
      value: dob,
      label: "Date Of Birth",
    },
    {
      name: "mobile",
      type: "tel",
      value: mobile,
      placeholder: "Enter Your Contact Number",
      label: "Contact Number",
    },
    {
      name: "username",
      type: "text",
      value: username,
      placeholder: "Enter Your Username",
      label: "Username",
    },
  ];

  let handleChange = (e) => {
    let { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (
      name == "" ||
      email == "" ||
      current_password == "" ||
      confirm_password == "" ||
      mobile == "" ||
      gender == "" ||
      username == "" ||
      gender == ""
    ) {
      alert("Fill All The Fields");
    } else if (current_password === confirm_password) {
      let detailsObject = {
        name: name,
        email: email,
        password: current_password,
        dob: dob,
        mobile: mobile,
        gender: gender,
        username: username,
        following: [],
        followers: [],
      };
      addUser(detailsObject);
    } else {
      alert("Password Mismatch");
    }
  };
  let navigate = useNavigate();
  let navigatePage = () => {
    navigate("/login");
  };
  useEffect(() => {
    if (addResponse === 201) {
      navigatePage();
    }
  }, [addResponse]);
  return (
    <article>
      <form action="" onSubmit={handleSubmit}>
        <Form data={registerData} handleChange={handleChange} />
        <aside value={gender} name="gender" onChange={handleChange}>
          <label htmlFor="gender">Gender: </label>
          {["male", "female", "others"].map((value) => {
            return (
              <Fragment key={value}>
                <input type="radio" name="gender" value={value} />
                <span>{value}</span>
              </Fragment>
            );
          })}
        </aside>
        <aside>
          <button>Submit</button>
        </aside>
      </form>
    </article>
  );
};

export default Register;
