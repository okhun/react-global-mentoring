import "./App.css";
import ReactComponent from "./MainComponents/ReactComponent";
import PureComponent from "./MainComponents/PureComponent";
import FunctionComponentCounter from "./MainComponents/FunctionComponentAndCounter";
import SearchForm from "./MainComponents/SearchForm";
import SelectGenre from "./MainComponents/SelectGenre";
import CreateElement from "./MainComponents/React.CreateElement";
function App() {
  return (
    <div>
      Hello world
      <CreateElement />
      <ReactComponent />
      <PureComponent />
      <FunctionComponentCounter />
      <SearchForm />
      <SelectGenre />
    </div>
  );
}

export default App;
