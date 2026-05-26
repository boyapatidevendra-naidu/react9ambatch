
const Child = ({ count, add }) => {
  return (
    <div>
      <h5>Child Component</h5>
      <p>Count:{count}</p>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default Child;
