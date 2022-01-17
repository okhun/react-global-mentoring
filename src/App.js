import "./App.css";
import ReactComponent from "./Task1/ReactComponent";
import PureComponent from "./Task1/PureComponent";
import FunctionComponentCounter from "./Task1/FunctionComponentAndCounter";
function App() {
  return (
    <div className="App">
      <ReactComponent />
      <PureComponent />
      <FunctionComponentCounter />
    </div>
  );
}

export default App;
