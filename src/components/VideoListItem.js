import React from "react";

const VideoListItem = ({ video, setSelectVideo }) => {
  const {
    snippet: {
      thumbnails: {
        default: { url },
      },
      title,
    },
  } = video;

  return (
    <div
      className="video-list-item"
      onClick={() => setSelectVideo(video)}
      data-test-id="video-list-item-container"
    >
      <img src={url} alt="thumbnail" />
      <div className="video-name video-desc">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default VideoListItem;
