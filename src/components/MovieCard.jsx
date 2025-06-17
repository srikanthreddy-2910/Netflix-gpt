import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ movieName, posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 m-2 rounded shadow hover:scale-105 hover:bg-gray-600 transition-transform duration-300">
      <img alt={movieName} src={IMG_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
