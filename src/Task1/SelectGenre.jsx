import React, { useState } from "react";
import "./selectGenre.css";
import checkmark from "./../images/checkmark.svg";

const SelectGenre = () => {
  const [isOpen, setOpen] = useState(false);
  const genres = ["Crime", "Documentary", "Horror", "Comedy"];
  const [isChecked, setCheckmarks] = useState([false, false, false, false]);
  const setCheck = (i) => {
    setCheckmarks((prev) => {
      let temp = [...prev];
      temp[i] = !temp[i];
      return temp;
    });
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className={`dropdown-check-list ${isOpen ? "visible" : ""}`}
        style={{ width: "400px", backgroundColor: "#232323", color: "#FFFFFF" }}
      >
        <span
          onClick={() => {
            const newIsOpen = !isOpen;
            setOpen(newIsOpen);
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
          {genres.map((genre, i) => {
            return (
              <li key={genre}>
                <label className="container">
                  {!isChecked[i] ? (
                    <button
                      onClick={() => {
                        setCheck(i);
                      }}
                      className="btnoptions"
                    ></button>
                  ) : (
                    <button
                      onClick={() => {
                        setCheck(i);
                      }}
                      className="checkmark"
                    >
                      <img
                        onClick={() => {
                          setCheck(i);
                        }}
                        className="checkmark_img"
                        src={checkmark}
                        alt="checkmark"
                      />
                    </button>
                  )}
                  {genre}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectGenre;
