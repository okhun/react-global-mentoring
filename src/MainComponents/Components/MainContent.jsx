import React, { useEffect, useState } from "react";
import MoviesList from "./MoviesList.jsx";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import "./mainContent.css";

const MainContent = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      fetch("API/movies.json")
        .then((data) => data.json())
        .then((data) => {
          setMovies(data);
        });
    };
    getMovies();
  }, []);
  return (
    <div className="main-content">
      <div>
        <Menu />
        <MoviesList movies={movies} />
        <Footer />
      </div>
    </div>
  );
};

export default MainContent;
