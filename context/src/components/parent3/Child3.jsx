import React, { useContext } from "react";
import { mesgContext } from "../../context/MesgContext";
import { networkContext } from "../../context/NetworkProvider";

const Child3 = () => {
  let message = useContext(mesgContext);
  let message1 = useContext(networkContext);
  console.log(message1)
  return (
    <div>
      {message}
      <p>{message1}</p>
    </div>
  );
};

export default Child3;
