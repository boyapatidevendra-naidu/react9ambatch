import React, { useState } from "react";
import LifeCycleClass from "./component/LifeCycleClass";

const App = () => {
  let [value, setValue] = useState(0);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Add</button>
      <hr />
      {value <= 5 && <LifeCycleClass name="Ravi" />}
    </div>
  );
};

export default App;
