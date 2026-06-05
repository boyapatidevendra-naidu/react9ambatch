import React, { useState } from "react";

const ControlledForms = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [gender, setGender] = useState("");

  let handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleGender = (e) => {
    setGender(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let details = {
      name: name,
      email: email,
      password: password,
      gender: gender,
    };
    console.log(details);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <aside>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={handleName} />
      </aside>
      <aside>
        <label htmlFor="">Email</label>
        <input type="text" value={email} onChange={handleEmail} />
      </aside>
      <aside>
        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={handlePassword} />
      </aside>

      <aside value={gender} onChange={handleGender}>
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

export default ControlledForms;
