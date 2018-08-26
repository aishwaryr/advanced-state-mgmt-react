import React, { Component } from "react";

import "./NewItem.css";

class NewItem extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { value } = this.state;

    event.preventDefault();

    // Do something when a new value is submitted.
    onSubmit(value);
    this.setState({ value: "" });
    // Reset the state of the component.
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input className="NewItem-input" type="text" value={value} onChange={this.handleChange} />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
