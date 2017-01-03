import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {FrontPage} from './FrontPage';
import {CreatePost} from './components/post/CreatePost';
import {Navbar} from './Navbar';
import {PostPage} from './components/post/PostPage';
import {UserLogin} from './components/user/UserLogin';
import $ from 'jquery'
import './App.css'

const App = React.createClass({
  getInitialState() {
    return {user: null};
  },
  componentDidMount() {
    $.ajax({
      url: '/api/login',
      type: 'GET'
    })
    .done((user) => {
      console.log('user get', user)
      if(user) {
        console.log(user.username + ' is logged in!');
        this.setState({user: user});
      } else {
        console.log('No one is logged in');
      }
    })
  },
	render(){
		return(
			<div className="container">
        <Navbar userStatus={this.state.user}/>
        {this.props.children}
      </div>
			)
	}
})

ReactDOM.render(
	<Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={FrontPage} />
      <Route path='/login' component={UserLogin} />
      <Route path='/form' component={CreatePost} />
      <Route path='/post/:id' component={PostPage} />
    </Route>
  </Router>
	,document.getElementById('root')
)