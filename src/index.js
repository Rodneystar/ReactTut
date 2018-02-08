

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import axios from 'axios'

import App from './containers/Root.js'


function render() {
	const Component = require("./containers/Root.js").default;
	ReactDOM.render(
		<AppContainer>
			<Component/>
		</AppContainer>,
		document.getElementById('root')
	);
};

render(App);

if (module.hot) {
	module.hot.accept('./containers/Root', () => {
		render()})
}
