import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import config from '../config.js';

import SearchBar from './components/search_bar';

const API_KEY = config.YoutubeAPIKey;


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: []
		};

		YTSearch({key: API_KEY, term: 'surf'}, (data) => {
			this.setState({ videos })
		});
	}
	render(){
		return(
				<div>
					<SearchBar />
				</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));