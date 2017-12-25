import React, {Component} from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    return (
        //two levels of onVideoSelect(index to videolist to videolistitem)
        <li onClick={() => {
            props.onVideoSelect(video)
        }} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={video.snippet.thumbnails.default.url}/></div>
                <div className="media-heading">
                <div className="media-body">{video.snippet.title}
                </div>
            </div>
        </div>
        </li>

    )
};

export default VideoListItem;