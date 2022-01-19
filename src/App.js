import "./App.css";
import ReactComponent from "./Task1/ReactComponent";
import PureComponent from "./Task1/PureComponent";
import FunctionComponentCounter from "./Task1/FunctionComponentAndCounter";
import SearchForm from "./Task1/SearchForm";
import SelectGenre from "./Task1/SelectGenre";
import CreateElement from "./Task1/React.CreateElement";
import MainContainer from "./Task3/MainContainer";
function App() {
  return (
    <div>
      {/* <MainContainer /> */}
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
