import React from 'react';


const VideoDetail =(props) =>{
    if(!props.video){
        return(
            <p>Loading...</p>
        );
    }
console.log(props.video.id.videoId);
    const url='https://www.youtube.com/embed/'+props.video.id.videoId;//string interpolation
    return(
        <div className="video-detail col-md-8" >
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <h3>{props.video.snippet.title}</h3>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>

    )
}
export default VideoDetail;