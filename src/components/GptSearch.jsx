import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import { BG_URL } from "../utils/constants";
import useGptMovieSearch from "../hooks/useGptMovieSearch";

const GptSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleSearch } = useGptMovieSearch();

  const onSearch = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="relative min-h-screen ">
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_URL}
          alt="bg Image"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <GptSearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={onSearch}
      />
      <GptSuggestion />
    </div>
  );
};

export default GptSearch;
