import React from "react";


const CounterWithFunction = () => {

    // let stateValue= React.useState(0)
    // console.log(stateValue)

    let [count,setCount] = React.useState(0)
    console.log(count)
    console.log(setCount)
  return (
    <div>
      <h5>Counter With Function Based Component</h5>
      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}>Add</button>
      <button onClick={()=> setCount(count-1)}>Sub</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  );
};

export default CounterWithFunction;
