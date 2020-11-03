import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div id="create-todo">
        <input
          id="new-todo"
          placeholder="What needs to be done?"
          autoComplete="off"
          type="text"
          value=""
        ></input>
      </div>
    );
  }
}
export default Input;
