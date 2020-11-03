import React, { Component } from "react";
import Li from "./li";

class List extends Component {
  render() {
    return (
      <ul id="todo-list">
        <Li></Li>
      </ul>
    );
  }
}

export default List;
