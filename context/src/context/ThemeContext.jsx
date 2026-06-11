import { createContext } from "react";

export let themeContext = createContext();

let ThemeProvider = ({ children }) => {
  let dark = {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
  };
  let light = {
    height: "100vh",
    backgroundColor: "white",
    color: "black",
  };
  return (
    <themeContext.Provider value={{ dark, light }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
