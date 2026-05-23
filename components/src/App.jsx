import React from "react";
import ClassBasedComponent from "./ClassBasedComponent";
import FunctionBasedComponent from "./FunctionBasedComponent";
import ArrowFunction from "./ArrowFunction";

class App extends React.Component {
  render() {
    return (
      <>
        <ClassBasedComponent></ClassBasedComponent>
        <FunctionBasedComponent />
        <ArrowFunction />
      </>
    );
  }
}
export default App;
