import React, { Component } from "react";
import Li from "./li";

class List extends Component {
  render() {
    let { data, changeDone, removeData } = this.props;
    return (
      <ul id="todo-list">
        {data.map((item) => {
          return (
            <Li
              data={item}
              key={item.id}
              changeDone={changeDone}
              removeData={removeData}
            ></Li>
          );
        })}
      </ul>
    );
  }
}

export default List;
