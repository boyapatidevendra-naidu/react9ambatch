const Form1 = ({ data, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {data.map((field) => {
        return (
          <aside>
            <label htmlFor="">{field.name}</label>
            <input
              type={field.type}
              value={field.value}
              name={field.name}
              onChange={handleChange}
            />
          </aside>
        );
      })}
      <aside>
        <button>Submit</button>
      </aside>
    </form>
  );
};

export default Form1;
