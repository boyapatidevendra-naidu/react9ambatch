import React from "react";
import Child from "./Child";
import Child1 from "./Child1";

const Parent = () => {
  let [count, setCount] = React.useState(0);

  let add = ()=>{
    setCount(count+1)
  }
  return (
    <div>
      <Child count={count} add={add} />
      <hr />
      <Child1 count={count} />
    </div>
  );
};

export default Parent;
