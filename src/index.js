import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config.js';

import SearchBar from './components/search_bar';

const API_KEY = config.YoutubeAPIKey;

const App = () => {
	return(
		<div>
		<SearchBar />
		</div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));