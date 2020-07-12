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
    <li
      className="video-list-item grouping"
      onClick={() => setSelectVideo(video)}
    >
      <div className="thumbnail float-left">
        <img src={url} alt="thumbnail" />
      </div>
      <div className="video-name float-right video-desc">{title}</div>
    </li>
  );
};

export default VideoListItem;
