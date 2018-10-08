import React, {Component} from "react";
import {NavLink} from 'react-router-dom'; 

class View extends Component {
	constructor(){
		super();
		this.state = {
			animeId: '',
			userId: ''
		}
	}
	
	lengthOData(){
		fetch('http://localhost:3004/user').then(res => res.json())
		.then(responseData => {
			this.setState({userId: responseData.length})
		})
	}
	
	onUpdate = (e) => {
		this.setState({userId: e.target.value})
	}
	
	deleteAnime = e => {
		let id = e.target.value
		this.props.remov(id)
	};
	
	getAnimeList = e => {
		e.preventDefault()
		this.props.getList(this.state.userId)
	}
	
	saveAnimeList = e => {
		e.preventDefault()
		this.props.saveList(this.state.userId)
	}
	
	render() {
	let info = this.props.anime	
	return (
	<div className='view'>
	{info.length > 0 ? 
		(
		<div>
			<h2>List of Animes</h2>
			<h4>Ready to Save? Enter Your </h4>
			<p>Your User Id is: {this.state.userId ? this.state.userId : this.lengthOData()}</p>
			<button onClick={this.saveAnimeList}>Save Anime List</button>
			<div className='row'>
			{info.map(anime => 
				<div key={anime.id} className='col-4'>
					<p>{anime.name}</p>
					<img className='img-responsive' src={anime.img} alt={anime.name} />
					<hr />
					<button value={anime.id} onClick={this.deleteAnime}>Remove?</button>
				</div>
			)}
			</div>
		</div>
		)
		:
		<div>
			<h2>Looks like you haven't added any anime yet.</h2>
			<img className='img-responsive' id='empty' src={'https://invisiblecatpatrol.files.wordpress.com/2017/05/maxresdefault.jpg?w=860&h=484'} alt={'No Game No Life - Shiro and Sora'} />
			<h3>New? Add Anime By <NavLink to="/search">Name</NavLink> or <NavLink to="/genre">Genre</NavLink></h3>
			<h4>Have a list saved? Enter your id below.</h4>
				<input type="text" className='viewInput' placeholder="Enter User Id" value={this.state.userId} onChange={this.onUpdate}/>
				<button onClick={this.getAnimeList}>Add</button>
		</div>
	}
	</div>
	)
	}
}

export default View;