import React from 'react'
import ReactDOM from 'react-dom'
import FrontPage from './FrontPage'

const App = React.createClass({
	render(){
		return(
			<div>
				<FrontPage />
			</div>
			)
	}
})

ReactDOM.render(
	<App/>, 
	document.getElementById('root')
)