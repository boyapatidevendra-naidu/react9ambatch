import { createContext } from "react";

export let networkContext = createContext();

let NetworkProvider = ({ children }) => {
  let message = "I am a airtel Provider";
  return (
    <networkContext.Provider value={message}>
      {children}
    </networkContext.Provider>
  );
};
export default NetworkProvider;
