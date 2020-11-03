import React, { Component } from "react";

class Li extends Component {
  render() {
    let { data, changeDone, removeData } = this.props;
    let { id, txt, done } = data;
    return (
      <li className="">
        <div className={`todo ${done ? "done" : ""}`}>
          <div className="display">
            <input
              className="check"
              type="checkbox"
              checked={done}
              onChange={({ target }) => {
                changeDone(id, target.checked);
              }}
            />
            <div className="todo-content">{txt}</div>
            <span
              className="todo-destroy"
              onClick={() => {
                removeData(id);
              }}
            ></span>
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
