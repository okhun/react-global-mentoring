import React, { useState } from "react";

const SearchForm = () => {
  const [term, setTerm] = useState("");
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <input
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            style={{
              background: "#323232",
              outline: "none",
              border: "none",
              width: "70%",
              height: "30px",
              borderRadius: "3px",
              color: "#FFFFFF",
              paddingLeft: "10px",
            }}
            placeholder="What do you want to watch?"
            type="search"
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(term);
            }}
            style={{
              backgroundColor: "#F65261",
              height: "30px",
              borderRadius: "2px",
              color: "#FFFFFF",
              outline: "none",
              border: "none",
              width: "25%",
            }}
          >
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
