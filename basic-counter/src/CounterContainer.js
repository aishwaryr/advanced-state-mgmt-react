import React, { Component } from "react";
import Counter from "./Counter";

class CounterContainer extends Component {
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
    return <Counter count={this.state.count} changeCounter={this.changeCounter} />;
  }
}

export default CounterContainer;
