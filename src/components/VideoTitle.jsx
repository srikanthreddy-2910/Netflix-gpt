import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[40%] sm:pt-[20%] px-6 sm:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl sm:text-5xl font-bold">{title}</h1>
      <p className="py-2 sm:py-6 text-sm sm:text-lg w-full sm:w-2/5 line-clamp-3 hidden min-[640px]:block">
        {overview}
      </p>
      <div className="my-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
        <button className="text-sm sm:text-xl text-black bg-white py-2 sm:py-4 px-6 sm:px-16 rounded-lg hover:bg-opacity-50">
          Play
        </button>
        <button className="text-sm sm:text-xl text-white bg-gray-500 py-2 sm:py-4 px-6 sm:px-16 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
