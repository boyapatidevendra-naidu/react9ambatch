import React, { useState } from "react";
import LifeCycleClass from "./component/LifeCycleClass";
import UseEffect from "./component/UseEffect";

const App = () => {
  let [value, setValue] = useState(0);
  return (
    // <div>
    //   <h1>{value}</h1>
    //   <button onClick={() => setValue(value + 1)}>Add</button>
    //   <hr />
    //   {value <= 5 && <LifeCycleClass name="Ravi" />}
    // </div>

    <div>
      {value <= 5 && <UseEffect />}
      <hr />
      <div>
        <h1>{value}</h1>
        <button onClick={() => setValue(value + 1)}>add</button>
      </div>
    </div>
  );
};

export default App;
