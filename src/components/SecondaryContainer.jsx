import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black w-screen">
      <div className="-mt-28 px-15 relative ">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        ></MovieList>

        <MovieList
          title={"Popular Movies"}
          movies={movies.popularMovies}
        ></MovieList>

        <MovieList
          title={"Top Rated Movies"}
          movies={movies.topRatedMovies}
        ></MovieList>

        <MovieList
          title={"UpComing Movies"}
          movies={movies.upcomingMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
