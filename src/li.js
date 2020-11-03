import React, { Component } from "react";

class Li extends Component {
  render() {
    return (
      <li className="editing">
        <div className="todo done">
          <div className="display">
            <input className="check" type="checkbox" />
            <div className="todo-content">2132141</div>
            <span className="todo-destroy"></span>
          </div>
          <div className="edit">
            <input className="todo-input" type="text" value="" />
          </div>
        </div>
      </li>
    );
  }
}

export default Li;
