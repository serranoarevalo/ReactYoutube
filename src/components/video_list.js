import React from 'react';

class VideoList extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'VideoList';
	}
	render() {
		return (
			<ul className="col-md-4 list-group">
			</ul>
		);
	}
}

export default VideoList;
