import { useState } from "react";
import client from "../utils/groqAi";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies, addMovieName } from "../utils/searchSlice";

const useGptMovieSearch = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      movie
    )}&include_adult=false&language=en-US&page=1`;

    try {
      const res = await fetch(url, API_OPTIONS);
      const data = await res.json();
      if (data.results?.length > 0) {
        return data.results;
      } else {
        console.warn(`No results found for movie: ${movie}`);
        return null;
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    try {
      const prompt = `You are a professional movie recommendation engine with deep knowledge of global cinema across all genres, decades, and countries.

Recommend exactly 10 of the absolute best movies related to "${searchTerm}". The movies should be critically acclaimed, have strong storytelling, excellent direction, and leave a lasting impression. Include a mix of classics and modern titles, both popular and hidden gems. Avoid overly commercial or generic lists; focus on high-quality, must-watch films.

Output only a valid JSON array containing exactly 10 movie titles as strings, like: ["Movie 1", "Movie 2", ..., "Movie 10"]. Do not include any explanation, formatting, or extra text. Output only the JSON array.`;

      const result = await client.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "llama3-8b-8192",
      });

      const response = result.choices[0].message.content;
      let movies = [];
      try {
        movies = JSON.parse(response);

        if (!Array.isArray(movies)) throw new Error("Invalid JSON structure");
      } catch (parseError) {
        console.error("Failed to parse AI response:", parseError);
        setLoading(false);
        return;
      }
      const data = await Promise.all(movies.map((movie) => searchMovie(movie)));
      const validMovies = data.filter((movie) => movie !== null);

      dispatch(
        addGptMovies({
          movieNames: movies,
          movieslist: validMovies,
        })
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { handleSearch, loading };
};

export default useGptMovieSearch;
