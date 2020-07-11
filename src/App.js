import "./App.css";

import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import YTSearch from "youtube-api-search";

/**
 * Youtube search apikey
 * @type {String}
 */
const API_KEY = "--YOUR-API-KEY-HERE--";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const searchYoutube = (term) => {
    YTSearch({ key: API_KEY, term: term }, (data) => {
      setVideos(data);
      setSelectedVideo(data[0]);
    });
  };

  return (
    <div className="container-main">
      <SearchBar onSearchInput={searchYoutube} />
      {videos.length > 0 ? (
        <div className="wrapper grouping">
          {selectedVideo && <VideoDetail selectedVideo={selectedVideo} />}
          <VideoList videos={videos} setSelectVideo={setSelectedVideo} />
        </div>
      ) : (
        <div className="loader">Loading...</div>
      )}
    </div>
  );
};

export default App;
