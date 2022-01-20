import React, { useState } from "react";
import "./selectGenre.css";

const SelectGenre2 = () => {
  const [isOpen, setOpen] = useState(false);
  const genres = ["Crime", "Documentary", "Horror", "Comedy"];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className={`dropdown-check-list ${isOpen ? "visible" : ""}`}
        style={{ width: "400px", backgroundColor: "#232323", color: "#FFFFFF" }}
      >
        <span
          onClick={() => {
            setOpen((previos) => !previos);
          }}
          className="anchor"
          style={{
            width: "96%",
            backgroundColor: "#323232",
            fontSize: "20px",
          }}
        >
          Select Genre
          <span className={`arrow ${isOpen ? "open" : "closed"}`}>ok</span>
        </span>
        <ul className="items" style={{ marginTop: "20px" }}>
          {genres.map((genre) => {
            return (
              <li key={genre}>
                <label className="container">
                  {genre}
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectGenre2;
