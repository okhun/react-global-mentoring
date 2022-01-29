import React from "react";
import Header from "./Components/Header.jsx";
import MainContent from "./Components/MainContent.jsx";
import "./maincontainer.css";

const MainContainer = () => {
  return (
    <div className="container_main">
      <Header />
      <MainContent />
    </div>
  );
};

export default MainContainer;
