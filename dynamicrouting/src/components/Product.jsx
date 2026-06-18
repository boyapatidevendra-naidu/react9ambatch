const Product = ({ data, goto }) => {
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.price}</p>
      <button onClick={() => goto(data.id)}>View More</button>
    </div>
  );
};

export default Product;
