import React, { useEffect, useState } from "react";
import axios from "../js/axios";
import requests from "../js/requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  {
    console.log(movie);
  }
  return (
    // title, div button , desc
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h2 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h2>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner--fadeButtom" />
    </header>
  );
};

export default Banner;
