import React, { Component } from "react";

import CounterContainer from "./CounterContainer";
// import CounterContainer from './CounterContainer';
// import WithCount from './WithCount';

export default class Application extends Component {
  render() {
    return (
      <main className="Application">
        <CounterContainer />
      </main>
    );
  }
}
