import React from 'react';

class VideoDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	const videoId = this.props.video.id.videoId;
    	const url = `https://www.youtube/embed/${videoId}`;
        return(
        	<div className="video-detail col-md-8">
        		<div className="embed-responsive embed-responsive-16by9">
        			<iframe className="embed-responsive-item" src={url}></iframe>
        		</div>
        		<div className="details">
        			<div>{this.props.video.snippet.title}</div>
        			<div>{this.props.video.snippet.description}</div>
        		</div>
        	</div>
        )
    }
}

export default VideoDetail;
