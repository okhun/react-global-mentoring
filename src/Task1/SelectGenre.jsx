import React, { useState } from "react";
import "./selectGenre.css";
const SelectGenre = () => {
  const [show, setShow] = useState("");
  const [clip, setClippath] = useState("polygon(50% 75%, 0 25%, 100% 25%)");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        id="list1"
        className={"dropdown-check-list " + show}
        tabindex="100"
        style={{ width: "400px", backgroundColor: "#232323", color: "#FFFFFF" }}
      >
        <span
          onClick={() => {
            if (show === "visible") {
              setShow("");
              setClippath("polygon(50% 75%, 0 25%, 100% 25%)");
            } else {
              setShow("visible");
              setClippath("polygon(50% 25%, 0 75%, 100% 75%)");
            }
          }}
          className="anchor"
          style={{
            width: "96%",
            backgroundColor: "#323232",
            fontSize: "20px",
          }}
        >
          Select Genre
          <span style={{ clipPath: clip }} className="arrow">
            ok
          </span>
        </span>

        <ul className="items" style={{ marginTop: "20px" }}>
          <li>
            <label className="container">
              Crime
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              Documentary
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              Horror
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              Comedy
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectGenre;