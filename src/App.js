import "./index.css";
import Title from "./title";
import Input from "./input";
import List from "./list";

function App() {
  return (
    <div id="todoapp">
      <Title></Title>
      <div className="content">
        <Input></Input>
        <List></List>
      </div>
    </div>
  );
}

export default App;
