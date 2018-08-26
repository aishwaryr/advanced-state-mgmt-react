import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  changeCounter = v => {
    if (v === 0) {
      this.setState({ count: 0 });
    } else {
      this.setState((state, props) => ({
        count: state.count + v
      }));
    }
  };

  render() {
    return (
      <section className="Counter">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.changeCounter(1);
          }}
          className="full-width">
          Increment
        </button>
        <button
          onClick={() => {
            this.changeCounter(-1);
          }}
          className="full-width">
          Decrement
        </button>
        <button
          onClick={() => {
            this.changeCounter(0);
          }}
          className="full-width">
          Reset
        </button>
      </section>
    );
  }
}

export default Counter;
