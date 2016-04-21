import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import config from '../config.js';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = config.YoutubeAPIKey;


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'surf'}, (videos) => {
			this.setState({ 
				videos:videos,
				selectedVideo: videos[0]
			})
		});
	}
	render(){
		return(
				<div>
					<SearchBar />
					<VideoDetail video={this.state.selectedVideo}/>
					<VideoList 
						videos={this.state.videos}
						onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					/>
				</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));