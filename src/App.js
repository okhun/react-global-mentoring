import "./App.css";
import ReactComponent from "./Task1/ReactComponent";
import PureComponent from "./Task1/PureComponent";
import FunctionComponentCounter from "./Task1/FunctionComponentAndCounter";
import SearchForm from "./Task1/SearchForm";
import SelectGenre from "./Task1/SelectGenre";
function App() {
  return (
    <div className="App">
      <ReactComponent />
      <PureComponent />
      <FunctionComponentCounter />
      <SearchForm />
      <SelectGenre />
    </div>
  );
}

export default App;
