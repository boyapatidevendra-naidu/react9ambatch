import Parent1 from "./components/parent1/Parent1";
import Parent2 from "./components/parent2/Parent2";
import Parent3 from "./components/parent3/Parent3";

const App = () => {
  let message = "Hello Good Morning Today We Are Discussing The Content";
  return (
    <div>
      <Parent1 text={message} />
      <hr />
      <Parent2 text={message} />
      <hr />
      <Parent3 />
    </div>
  );
};

export default App;
