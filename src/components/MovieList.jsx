import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.length > 0 &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movieName={movie.original_title}
                posterPath={movie.poster_path}
              ></MovieCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
