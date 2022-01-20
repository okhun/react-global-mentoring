import React from "react";

class PureComponent extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: "red", padding: "10px", color: "white" }}>
        It is Pure Component
      </div>
    );
  }
}

export default PureComponent;
