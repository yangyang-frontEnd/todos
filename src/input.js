import React, { Component } from "react";

class Input extends Component {
  state = {
    val: "",
  };
  render() {
    let { addData } = this.props;
    let { val } = this.state;
    return (
      <div id="create-todo">
        {val}
        <input
          id="new-todo"
          placeholder="What needs to be done?"
          autoComplete="off"
          type="text"
          value={val}
          onChange={({ target }) => {
            this.setState({
              val: target.value,
            });
          }}
          onKeyUp={({ keyCode }) => {
            if (keyCode === 13) {
              if (!val.trim()) {
                alert("请输入点内容吧");
              } else {
                addData(val);
                this.setState({
                  val: "",
                });
              }
            }
          }}
        ></input>
      </div>
    );
  }
}
export default Input;
