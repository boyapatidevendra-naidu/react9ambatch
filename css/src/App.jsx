import Child from "./Child";
import Parent from "./Parent";
// import "./index.css"

const App = () => {
  return (
    <div>
      <p className="tag">I am a app component</p>
      <Parent />
      <Child />
    </div>
  );
};

export default App;
