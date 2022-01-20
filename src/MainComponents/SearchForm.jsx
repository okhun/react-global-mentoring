import React, { useState } from "react";
import "./searchForm.css";

const SearchForm = () => {
  const [term, setTerm] = useState("");
  return (
    <div className="searchform-container">
      <form>
        <input
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          placeholder="What do you want to watch?"
          type="search"
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(term);
          }}
        >
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
