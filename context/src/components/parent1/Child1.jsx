import { useContext } from "react";
import { mesgContext } from "../../context/MesgContext";

const Child1 = ({ text }) => {
  let message = useContext(mesgContext);
  return (
    <div>
      {text}
      <p>{message}</p>
    </div>
  );
};

export default Child1;
