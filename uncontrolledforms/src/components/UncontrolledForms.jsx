import React, { useRef } from "react";

const UncontrolledForms = () => {
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let mobileNoRef = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    let details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      mobileNo: mobileNoRef.current.value,
    };
    console.log(details);

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    mobileNoRef.current.value = "";
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">Name</label>
          <input type="text" ref={nameRef} />
        </aside>
        <aside>
          <label htmlFor="">Email</label>
          <input type="text" ref={emailRef} />
        </aside>
        <aside>
          <label htmlFor="">Password</label>
          <input type="text" ref={passwordRef} />
        </aside>
        <aside>
          <label htmlFor="">Mobile NO</label>
          <input type="text" ref={mobileNoRef} />
        </aside>
        <aside>
          <button>Submit</button>
        </aside>
      </form>
    </div>
  );
};

export default UncontrolledForms;
