import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ setSelectVideo, videos }) => (
  <div className="video-list" data-test-id="video-list-container">
    {videos.map((video) => (
      <VideoListItem
        video={video}
        key={video.etag}
        setSelectVideo={setSelectVideo}
      />
    ))}
  </div>
);

export default VideoList;
