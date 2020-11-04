import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div id="todo-stats">
        <span className="todo-count">
          <span className="number">0</span>{" "}
          <span className="word">项待完成</span>
        </span>

        <span className="todo-clear">
          <a href="#">
            Clear <span>0</span> 已完成事项
          </a>
        </span>
      </div>
    );
  }
}

export default Footer;
