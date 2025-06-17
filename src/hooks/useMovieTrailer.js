import { useSelector, useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    if (filterTrailer.length === 0) return;

    const randomIndex = Math.floor(Math.random() * filterTrailer.length);
    const trailer = filterTrailer[randomIndex];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!trailerVideo || trailerVideo.id !== movieId) {
      getMovieVideo();
    }
  }, [movieId, trailerVideo]);
};

export default useMovieTrailer;
