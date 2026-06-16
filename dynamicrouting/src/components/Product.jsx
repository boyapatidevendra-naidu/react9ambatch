const Product = ({ data, goto }) => {
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.price}</p>
      <button onClick={goto}>View More</button>
    </div>
  );
};

export default Product;
