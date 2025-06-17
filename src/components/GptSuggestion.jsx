import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestion = () => {
  const showGptMovies = useSelector((store) => store.search.showGptMovies);
  if (!showGptMovies) return null;
  const { movieNames, movieslist } = showGptMovies;
  if (!movieNames) return null;

  return (
    <div className="w-full flex flex-col z-10 items-center py-10 bg-black/80">
      <div className="w-full px-4 sm:px-10 md:px-20 flex flex-col gap-8">
        {movieNames.map((movieName, index) => {
          const movies = movieslist[index] ?? [];
          return (
            <MovieList key={movieName} title={movieName} movies={movies} />
          );
        })}
      </div>
    </div>
  );
};

export default GptSuggestion;
