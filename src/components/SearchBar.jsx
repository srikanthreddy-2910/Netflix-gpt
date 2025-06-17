import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "lucide-react";
import { toggleGptSearch } from "../utils/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((state) => state.search.showGptSearch);

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <>
      <button
        className={`absolute mt-1 top-6 right-60 z-50 cursor-pointer 
          ${
            showGptSearch
              ? "px-2 py-2 bg-blue-500 rounded-md text-white  font-semibold shadow-lg hover:bg-blue-600 transition"
              : "h-10 w-10 bg-blue-300 rounded-full p-2 shadow-lg hover:bg-blue-500 transition"
          }`}
        onClick={handleGptSearch}
        aria-label="Toggle GPT Search"
      >
        {showGptSearch ? (
          "Back Home"
        ) : (
          <Search className="h-6 w-6 text-white" />
        )}
      </button>
    </>
  );
};

export default SearchBar;
