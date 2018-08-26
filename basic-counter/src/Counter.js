import React from "react";

const Counter = props => (
  <section className="Counter">
    <h1>Count: {props.count}</h1>
    <button
      onClick={() => {
        props.changeCounter(1);
      }}
      className="full-width">
      Increment
    </button>
    <button
      onClick={() => {
        props.changeCounter(-1);
      }}
      className="full-width">
      Decrement
    </button>
    <button
      onClick={() => {
        props.changeCounter(0);
      }}
      className="full-width">
      Reset
    </button>
  </section>
);

export default Counter;
