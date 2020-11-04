import React, { Component, createRef } from "react";

class Li extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      iptVal: props.data.txt,
    };
    this.input = createRef();
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState);
    let { isEdit } = prevState;
    if (isEdit !== this.state.isEdit) {
      console.log("当前组件", this.input.current);
      this.input.current.focus();
    }
  }
  render() {
    let { isEdit, iptVal } = this.state;
    let { data, changeDone, removeData, changeTxt } = this.props;
    let { id, txt, done } = data;
    return (
      <li className={isEdit ? "editing" : ""}>
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
            <div
              className="todo-content"
              onDoubleClick={() => {
                this.setState({
                  isEdit: true,
                });
              }}
            >
              {txt}
            </div>
            <span
              className="todo-destroy"
              onClick={() => {
                removeData(id);
              }}
            ></span>
          </div>
          <div className="edit">
            <input
              ref={this.input}
              className="todo-input"
              type="text"
              value={iptVal}
              onBlur={({ target }) => {
                if (target.value.trim()) {
                  changeTxt(id, target.value);
                } else {
                  this.setState({
                    iptVal: txt,
                  });
                }
                this.setState({
                  isEdit: false,
                });
              }}
              onChange={({ target }) => {
                this.setState({
                  iptVal: target.value,
                });
              }}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default Li;
