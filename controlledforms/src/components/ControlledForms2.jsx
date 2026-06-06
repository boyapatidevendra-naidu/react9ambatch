import React, { useState } from "react";

const ControlledForms2 = () => {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
  });

  let { name, email, password, dob, gender } = details;

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  let handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <aside>
        <label htmlFor="">Name</label>
        <input type="text" value={name} name="name" onChange={handleChange} />
      </aside>
      <aside>
        <label htmlFor="">Email</label>
        <input type="text" value={email} name="email" onChange={handleChange} />
      </aside>
      <aside>
        <label htmlFor="">Password</label>
        <input
          type="text"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </aside>
      <aside>
        <label htmlFor="">Dob</label>
        <input type="date" value={dob} name="dob" onChange={handleChange} />
      </aside>
      <aside value={gender} name="gender" onChange={handleChange}>
        <label htmlFor="">Gender</label>
        <input type="radio" name="gender" value="male" />
        Male
        <input type="radio" name="gender" value="female" />
        Female
        <input type="radio" name="gender" value="others" />
        Others
      </aside>
      <aside>
        <button>Submit</button>
      </aside>
    </form>
  );
};

export default ControlledForms2;
