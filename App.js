import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
//import CollabEditor from './collabEditor'
import Main from './pages/Main';
import './index.css';
import CollabEditor from './collabEditor';

import Profile from './pages/Profile';
var randomstring = require("randomstring");
 


class App extends Component {
  render() {
    return (
      <Router>
        <div class = "container">
			<Route exact path ="/" component={Main} />
			<Route exact path ="/profile/:id" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
