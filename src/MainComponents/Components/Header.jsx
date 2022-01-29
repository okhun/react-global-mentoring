import React from "react";
import "./header.css";
import "./../main.css";
import SearchForm from "./SearchForm.jsx";

const Header = () => {
  return (
    <div className="header_container">
      <div>
        <div className="header_logo_movie">
          <div>
            <h4 className="main-red">netflixroulette</h4>
          </div>
          <div>
            <p>
              <button className="main-red add-movie">+ ADD MOVIE</button>
            </p>
          </div>
        </div>
      </div>
      <h2 className="header-h2">FIND YOUR MOVIE</h2>
      <div className="set-searchform">
        <SearchForm />
      </div>
    </div>
  );
};

export default Header;
