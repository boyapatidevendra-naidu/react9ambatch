import React, { useState } from "react";

const CounterWithFunction = () => {
  // let stateValue= React.useState(0)
  // console.log(stateValue)

  let [count, setCount] = React.useState(0);
  let [name, setName] = useState("");
  console.log(count);
  console.log(setCount);
  return (
    <div>
      {/* <h5>Counter With Function Based Component</h5>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Sub</button>
      <button onClick={() => setCount(0)}>Reset</button> */}

      <p> Hello {name}</p>
      <button onClick={() => setName("Ram")}>
        Click me the to display name
      </button>
    </div>
  );
};

export default CounterWithFunction;
