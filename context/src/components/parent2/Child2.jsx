import { useContext } from "react";
import { mesgContext } from "../../context/MesgContext";

const Child2 = ({ text }) => {
  let message = useContext(mesgContext);
  console.log(message);
  return (
    <div>
      {text}
      <p>{message}</p>
    </div>
  );
};

export default Child2;
