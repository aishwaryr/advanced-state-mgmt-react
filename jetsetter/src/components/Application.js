import React, { Component } from "react";
import uniqueId from "lodash/uniqueId";
import CountDown from "./CountDown";
import NewItem from "./NewItem";
import Items from "./Items";

import "./Application.css";

const defaultState = [
  { value: "Pants", id: uniqueId(), packed: false },
  { value: "Jacket", id: uniqueId(), packed: false },
  { value: "iPhone Charger", id: uniqueId(), packed: false },
  { value: "MacBook", id: uniqueId(), packed: false },
  { value: "Sleeping Pills", id: uniqueId(), packed: true },
  { value: "Underwear", id: uniqueId(), packed: false },
  { value: "Hat", id: uniqueId(), packed: false },
  { value: "T-Shirts", id: uniqueId(), packed: false },
  { value: "Belt", id: uniqueId(), packed: false },
  { value: "Passport", id: uniqueId(), packed: true },
  { value: "Sandwich", id: uniqueId(), packed: true }
];

class Application extends Component {
  state = {
    items: defaultState
  };

  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  toggleItem = itemToToggle => {
    const items = this.state.items.map(item => {
      if (item.id !== itemToToggle.id) return item;
      return { ...itemToToggle, packed: !itemToToggle.packed };
    });
    this.setState({ items });
  };

  markAllAsUnpacked = () => {
    const items = this.state.items.map(item => {
      return { ...item, packed: false };
    });
    this.setState({ items });
  };

  addItem = value => {
    const newItem = {};
    newItem["value"] = value;
    newItem["id"] = uniqueId();
    newItem["packed"] = false;
    // const newItemsArray = this.state.items;
    // newItemsArray.push(newItem);
    this.setState({ items: [newItem, ...this.state.items] });
  };

  removeItem = itemToRemove => {
    this.setState({ items: this.state.items.filter(item => item.id !== itemToRemove.id) });
  };

  render() {
    const { items } = this.state;

    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <CountDown />
        <Items
          title="Unpacked Items"
          onToggle={this.toggleItem}
          items={items.filter(item => !item.packed)}
          onRemove={this.removeItem}
        />
        <Items
          title="Packed Items"
          items={items.filter(item => item.packed)}
          onRemove={this.removeItem}
          onToggle={this.toggleItem}
        />
        <button className="button full-width" onClick={this.markAllAsUnpacked}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;
