import { Component } from "react";
import "./index.css";
import Title from "./title";
import Input from "./input";
import List from "./list";
import Footer from "./footer";

class App extends Component {
  /*   state = {
    data: [
      { id: 1, txt: "test1....", done: false },
      { id: 2, txt: "test2....", done: true },
      { id: 3, txt: "test3....", done: false },
    ],
  }; */
  constructor(props) {
    super(props);
    let data = window.localStorage.getItem("todo");
    data = data ? JSON.parse(data) : [];
    this.state = { data };
  }
  componentDidUpdate() {
    let { data } = this.state;
    data = JSON.stringify(data);
    window.localStorage.setItem("todo", data);
  }
  addData = (txt) => {
    let { data } = this.state;
    data.push({
      id: Date.now(),
      txt,
      done: false,
    });
    this.setState({
      data,
    });
  };
  changeDone = (id, done) => {
    let { data } = this.state;
    data.forEach((item) => {
      if (item.id === id) {
        item.done = done;
      }
    });
    this.setState({
      data,
    });
  };
  removeData = (id) => {
    let { data } = this.state;
    this.setState({
      data: data.filter((item) => {
        return item.id !== id;
      }),
    });
  };
  changeTxt = (id, txt) => {
    console.log("触发了changeTxt");
    let { data } = this.state;
    data.forEach((item) => {
      if (item.id === id) {
        item.txt = txt;
      }
    });
    this.setState({ data });
  };
  render() {
    let { data } = this.state;
    return (
      <div id="todoapp">
        <Title></Title>
        <div className="content">
          <Input addData={this.addData}></Input>
          <List
            data={data}
            changeDone={this.changeDone}
            removeData={this.removeData}
            changeTxt={this.changeTxt}
          ></List>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
