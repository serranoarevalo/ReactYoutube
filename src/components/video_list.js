import React from 'react';
import VideoListItem from './video_list_item'

class VideoList extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'VideoList';
	}
	render() {
		const videoItems = props.videos.map((video) => {
			return <VideoListItem video={video} />
		});
		return (
			<ul className="col-md-4 list-group">
				{videoItems}
			</ul>
		);
	}
}

export default VideoList;
