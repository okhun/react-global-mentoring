import React from "react";
import ReactDOM from "react-dom";

const CreateElement = () => {
  // Creating react element using createElement
  const title = React.createElement("h1", {}, "My First React Code");
  const paragraph = React.createElement(
    "p",
    {},
    "Writing component using createElement"
  );
  const reactCreateElement = React.createElement(
    "div",
    { style: { backgroundColor: "yellow" } },
    [title, paragraph]
  );
  return reactCreateElement;
};

export default CreateElement;
