/**
 * Import bootstrap component
 */
import React, {Component} from 'react';

/**
 * Import custom components
 */
import VideoListItem from './video_list_item';

/**
 * Class Video List
 */
class VideoList extends Component {
  /**
   * constructor
   * @param  {Object} props [properties passed from parent]
   */
  constructor(props) {
    super(props);

    this.onSelectVideo = this.onSelectVideo.bind(this);
  }

  onSelectVideo(video) {
    this.props.selectVideo(video);
  }

  /**
   * renders component
   * @return {String} [description]
   */
  render() {
    const videoList = this.props.videos.map((video) => {
        return <VideoListItem video={video} key={video.etag} selectVideo={this.onSelectVideo} />
    });

    return(
      <div className="video-list">
        <ul>
          {videoList}
        </ul>
      </div>
    );
  }
}

export default VideoList;
