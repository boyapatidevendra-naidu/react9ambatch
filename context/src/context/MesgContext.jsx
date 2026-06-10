import { createContext } from "react";

export let mesgContext = createContext();

let MessageProvider = ({ children }) => {
  let message = "I am a Message Provider Created By Ram";
  
  return (
    <mesgContext.Provider value={message}>{children}</mesgContext.Provider>
  );
};

export default MessageProvider
