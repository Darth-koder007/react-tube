/**
 * Import bootstrap components
 */
import React, {Component} from 'react';

/**
 * Video List Item class
 */
class VideoListItem extends Component {
  /**
   * constructor
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.selectVideo = this.selectVideo.bind(this);
  }

  selectVideo() {
    this.props.selectVideo(this.props.video);
  }

  /**
  * render component
   * @return {String}
   */
  render() {
    let thumbnail = this.props.video.snippet.thumbnails.default.url;

    return(
      <li className="video-list-item grouping" onClick={this.selectVideo}>
        <div className="thumbnail float-left"><img src={thumbnail} /></div>
        <div className="video-name float-right">{this.props.video.snippet.title}</div>
      </li>
    );
  }
}

export default VideoListItem;
