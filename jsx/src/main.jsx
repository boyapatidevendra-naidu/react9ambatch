import React from "react";
import ReactDom from "react-dom/client";

let a = 20;
let b = 30;
let userName = "Ram";
let arr = [1, 2, 3, 4, 5, 6];

let age = () => 25;

let obj = {
  frontend: "React Js",
  backend: "Python",
  Database: "SQL",
};
ReactDom.createRoot(document.getElementById("root")).render(
  //   <React.Fragment>
  //     <h1>I am a h1 tag 1</h1>
  //     <h1>I am a h1 tag 2</h1>
  // -  </React.Fragment>,
  //   <>
  //     <h1>I am a h1 tag 1</h1>
  //     <h1>I am a h1 tag 2</h1>
  //     <p>I am a para tag</p>
  //   </>,

  //   <>
  //     <div>
  //       <h1>I am a h1 tag</h1>
  //     </div>
  //     <div>
  //       <h2>I am a h1 tag</h2>
  //     </div>
  //   </>,

  <>
    <h1>{a + b}</h1>
    <p>{userName}</p>
    <p>Age {age()}</p>
    <div>
      {arr.map((value) => {
        return <p>{value}</p>;
      })}
    </div>
    <p>{obj.frontend}</p>
    <p>{obj.backend}</p>
    <p>{obj.Database}</p>
    <h5>{arr[0]}</h5>

    <label htmlFor="">Name</label>
    <input type="text"  className="input"/>
  </>,
);

