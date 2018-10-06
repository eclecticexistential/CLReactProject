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
		let animeName = this.props.location.state.props.title
		let animeImg = this.props.location.state.props.img
		let animeSyn = this.props.location.state.props.synopsis
		return (
		<div className='container'>
			<div className='row' id='details'>
				<div className='col-lg-3'>
					<h1>{animeName}</h1>
				</div>
				<div className='col-lg-3'>
					<img className="img-responsive" src={animeImg} alt={animeName} />
				</div>
				<div className='col-lg-3'>
					<p>{animeSyn}</p>
					<input onClick={this.addAnime} type='checkbox' value='add'/>
					<label className='mt-5'>Add?</label>
					<hr />
					<Link to="/View" >Click to View List</Link>
				</div>
			</div>
		</div>
		)
	}
}

export default Details;