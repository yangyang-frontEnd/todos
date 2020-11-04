import React, { Component } from "react";
import Li from "./li";

class List extends Component {
  render() {
    let { data, changeDone, removeData, changeTxt } = this.props;
    return (
      <ul id="todo-list">
        {data.map((item) => {
          return (
            <Li
              data={item}
              key={item.id}
              txt={item.txt}
              changeDone={changeDone}
              removeData={removeData}
              changeTxt={changeTxt}
            ></Li>
          );
        })}
      </ul>
    );
  }
}

export default List;
