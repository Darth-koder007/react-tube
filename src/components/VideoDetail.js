import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  const {
    id: { videoId },
    snippet: { title, description },
  } = selectedVideo;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="video-frame">
        <iframe src={url} title={videoId}></iframe>
      </div>
      <div className="video-desc">{title}</div>
      <div className="video-desc">{description}</div>
    </div>
  );
};

export default VideoDetail;
