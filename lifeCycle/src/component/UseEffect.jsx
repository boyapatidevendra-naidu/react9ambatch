import { useEffect, useState } from "react";

const UseEffect = () => {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("");

  let unmount = ()=>{
    alert("I am  unmounting")
  }

  useEffect(() => {
    console.log("Count");
    return unmount
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <hr />
      <h1>My name is {name} </h1>
      <button onClick={() => setName("Ram")}>Change Name</button>
    </div>
  );
};

export default UseEffect;
