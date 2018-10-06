import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Details extends Component {
	constructor(){
		super();
	this.state = {
		ListofAnimes:[]
	}
	}
	
	addAnime = (anime) => {
		this.setState(state =>{
			const animes = [...state.ListofAnimes, anime]
			return {animes}
		})
	}
	render() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<p>{this.props.synopsis}</p>
				<input onClick={this.addAnime} type='checkbox' value='add'/>
				<label>Add?</label>
				<hr />
				<Link to="/View" >Click to View List</Link>
			</div>
		)
	}
}

export default Details;