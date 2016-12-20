import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {FrontPage} from './FrontPage';
import {CreatePost} from './CreatePost'

const App = React.createClass({
	render(){
		return(
			<div>
				<CreatePost />
				<FrontPage />
			</div>
			)
	}
})

ReactDOM.render(
	<App/>, 
	document.getElementById('root')
)