import { Component } from "react";

export default class CounterWithClass extends Component {
  // ! this.setState:- This method is used to update the state
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h5>Counter WIth Class Based Component</h5>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          ADD
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Sub
        </button>
        <button onClick={() => this.setState({ count: 0 })}>Reset</button>
      </div>
    );
  }
}
