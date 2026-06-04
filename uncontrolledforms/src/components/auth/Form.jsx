import React, { useRef } from "react";

const Form = ({ data }) => {
  let refs = useRef({});
  let handleSubmit = (e) => {
    e.preventDefault();
    let details = {};
    data.map((value) => {
      details[value.name] = refs.current[value.name].value;
    });
    console.log(details);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      {data.map((value) => {
        return (
          <aside>
            <label htmlFor={value.name}>{value.name}</label>
            <input
              type={value.type}
              placeholder={value.placeholder}
              ref={(element) => (refs.current[value.name] = element)}
            />
          </aside>
        );
      })}
      <aside>
        <button>Submit</button>
      </aside>
    </form>
  );
};
export default Form;
