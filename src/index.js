import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config.js';

const API_KEY = config.YoutubeAPIKey;

const App = () => {
	return <div>Wadup</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));