import React, { useEffect, useState } from "react";
import axios from "../js/axios";
import requests from "../js/requests";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //    console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  {
    // console.log(movies);
  }
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <>
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge "}`}
                src={`${base_url}${
                  isLargeRow ? movie.backdrop_path : movie.poster_path
                }`}
                alt={movie.name}
                className="row__poster"
              />
              {/* <h2>{movie.name}</h2> */}
            </>
          );
        })}
      </div>
      {/* <h3>{movies.length}</h3> */}
    </div>
  );
};

export default Row;
