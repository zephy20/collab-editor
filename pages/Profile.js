import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CollabEditor from '../collabEditor';


//import CollabEditor from 'collabEditor';


class Profile extends Component {
	render() {
		var title = prompt("Enter Name","");
		var {match} = this.props;
		return (
			<div>
			<h3> Profile {title}</h3>
			<br/>
			<CollabEditor />
			<Link to="/">Back</Link>
			</div>			
					)
		}
	}


export default Profile;