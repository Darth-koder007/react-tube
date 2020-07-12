import "./App.css";

import React, { useState } from "react";

import Loader from "./loader.svg";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import searchYoutube from "./api";

/**
 * Youtube search apikey
 * @type {String}
 */
// eslint-disable-next-line no-undef
const API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSearchInput = (term) => {
    setLoading(true);
    searchYoutube({ key: API_KEY, term: term }, (data) => {
      setLoading(false);
      setVideos(data);
      setSelectedVideo(data[0]);
    });
  };

  return (
    <div className="container-main">
      <SearchBar onSearchInput={onSearchInput} />
      {videos.length > 0 && !loading && (
        <div className="wrapper">
          {selectedVideo && <VideoDetail selectedVideo={selectedVideo} />}
          <VideoList videos={videos} setSelectVideo={setSelectedVideo} />
        </div>
      )}
      {loading && (
        <div className="loader">
          <img className="loader" src={Loader} alt="loader" />
        </div>
      )}
    </div>
  );
};

export default App;
