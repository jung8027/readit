import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {FrontPage} from './FrontPage';
import {CreatePost} from './components/post/CreatePost';
import {Navbar} from './Navbar';
import {PostPage} from './components/post/PostPage';

const App = React.createClass({
	render(){
		return(
			<div className="container">
        <Navbar />
        {this.props.children}
      </div>
			)
	}
})

ReactDOM.render(
	<Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={FrontPage} />
      <Route path='/form' component={CreatePost} />
      <Route path='/post/:id' component={PostPage} />
    </Route>
  </Router>
	,document.getElementById('root')
)