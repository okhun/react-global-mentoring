import React, { useState } from "react";
import "./movieList.css";

const MoviesList = (props) => {
  const [show, setShow] = useState(-1);
  return (
    <div className="movielist-container">
      <p>{props.movies.length} movies found</p>
      <div>
        {props.movies.length &&
          props.movies.map((el, i) => (
            <div
              onMouseEnter={() => {
                setShow(i);
              }}
              onMouseLeave={() => {
                setShow(-1);
              }}
              key={"id_" + i}
              className="movie-card"
            >
              {show === i ? (
                <img src="http://127.0.0.1:5500/src/images/setbtn.svg" />
              ) : (
                ""
              )}
              <div>
                <img
                  src={`http://127.0.0.1:5500/src/images/movies/${el.image}.png`}
                />
                <div>
                  <p>{el.title}</p>
                  <p className="p-release">{el.releaseDate}</p>
                </div>
                <p className="p-overview">{el.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
