	import React, { Component } from 'react';
import { Link } from 'react-router-dom';







class Main extends Component {
	render() {
		return(
			<div class = "container">
				
				<h1> Realtime Code Editor </h1>
				<button type="button" class="btn btn-primary" onClick = {()=>{
					var randomstring = require("randomstring");
					var generated = randomstring.generate(5);

					this.props.history.push('/Profile/' +generated);
				}}>Create New Document</button>
					
				
		
			</div>
				

			)
	}
}

export default Main;