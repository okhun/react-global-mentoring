import React from "react";

const CreateElement = () => {
  const title = React.createElement("h1", {}, "My First React Code");
  const paragraph = React.createElement(
    "p",
    {},
    "Writing component using createElement"
  );
  const reactCreateElement = React.createElement(
    "div",
    { style: { backgroundColor: "yellow" } },
    title,
    paragraph
  );
  return reactCreateElement;
};

export default CreateElement;
