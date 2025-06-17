import React from "react";

const GptSearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    setTimeout(() => {
      setSearchTerm("");
    }, 500);
  };

  return (
    <div className="flex mt-20 justify-center py-20">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <form
          className="flex flex-col sm:flex-row gap-4 items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="What would you like to watch today?"
            className="px-4 py-3 border border-gray-600 rounded-md focus:outline-none bg-gray-900 text-white placeholder-gray-400 w-72 sm:w-96 transition-all duration-300 hover:border-red-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-red-700 text-white font-medium rounded-md hover:bg-red-600 active:scale-95 transition-transform duration-200 shadow-md"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
