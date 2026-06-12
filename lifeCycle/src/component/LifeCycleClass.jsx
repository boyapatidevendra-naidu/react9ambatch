import React, { Component } from "react";

export default class LifeCycleClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "",
    };
    console.log("I am a constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("I am a get Derived State Form Props");
    // console.log(props);
    console.log(state);
    state.name = props.name;
  }

  shouldComponentUpdate() {
    // return true;
    return false;
  }
  componentDidUpdate() {
    console.log("I am a component did Update");
    document.getElementById("div").innerHTML = "I am a div tag";
  }

  componentWillUnmount(){
    alert("I am a unmounting")
  }
  render() {
    console.log("I am a render Method");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add
        </button>
        <h1>My name is {this.state.name}</h1>
        <div id="div"></div>
      </div>
    );
  }
  componentDidMount() {
    console.log("I am a component did mount");
  }
}
