import "./App.css";
import ReactComponent from "./Task1/ReactComponent";
import PureComponent from "./Task1/PureComponent";
import FunctionComponentCounter from "./Task1/FunctionComponentAndCounter";
import SearchForm from "./Task1/SearchForm";
import SelectGenre from "./Task1/SelectGenre";
import reactCreateElement from "./Task1/React.CreateElement";
function App() {
  return (
    <div className="App">
      Hello world
      {reactCreateElement}
      <ReactComponent />
      <PureComponent />
      <FunctionComponentCounter />
      <SearchForm />
      <SelectGenre />
    </div>
  );
}

export default App;
