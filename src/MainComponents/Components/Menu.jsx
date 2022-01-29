import React from "react";
import "./menu.css";

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <div>
          <p className="p-all">ALL</p>
          <p>DOCUMENTARY</p>
          <p>COMEDY</p>
          <p>HORROR</p>
          <p>CRIME</p>
        </div>
        <div>
          <p>
            SORT BY
            <span className="sort">
              RELEASE DATE{" "}
              <img
                src="http://127.0.0.1:5500/src/images/toggle.svg"
                alt="toggle"
              />
            </span>
          </p>
        </div>
        <div className="hr-line"></div>
      </div>
    </div>
  );
};

export default Menu;
