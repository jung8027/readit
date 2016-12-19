import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
	render(){
		return(
			<div>
			Hello
			</div>
			)
	}
})

ReactDOM.render(
	<App/>, 
	document.getElementById('root')
)