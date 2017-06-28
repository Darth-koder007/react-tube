/**
 * import react component
 */
import React, {Component} from 'react';

/**
 * video detail component
 */
class VideoDetail extends Component {
  /**
   * constructor function
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * render components
   */
  render() {
    let videoId = this.props.selectedVideo.id.videoId;
    let url = `https://www.youtube.com/embed/${videoId}`;

    return(
      <div className="video-detail">
        <div className="video-frame">
          <iframe src={url}></iframe>
        </div>
        <div className="video-desc">
          {this.props.selectedVideo.snippet.title}
        </div>
        <div className="video-desc">
          {this.props.selectedVideo.snippet.description}
        </div>
      </div>
    );
  }
}

export default VideoDetail;
