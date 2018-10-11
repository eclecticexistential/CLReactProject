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
		if(this.props.currUser){
			this.setState({userId: this.props.currUser})
		}
		if(this.props.currUser === '' && this.state.userId === ''){
		fetch('http://localhost:3004/user').then(res => res.json())
		.then(responseData => {
			this.setState({userId: responseData.length})
		})
	  }
	}
	
	deleteAnime = e => {
		let id = e.target.value
		this.props.remov(id)
	};
	
	saveAnimeList = e => {
		e.preventDefault()
		if(this.state.userId !== ''){
			console.log(this.state.userId)
			this.props.saveList(this.state.userId)
		}
		if(this.state.userId === ''){
			this.props.saveList(this.props.currUser)
		}
	}
	
	render() {
	let info = this.props.anime	
	return (
	<div className='view'>
	{info.length > 0 ? 
		(
		<div>
			<h2>List of Animes</h2>
			<p>Your User Id is: {this.props.currUser ? this.props.currUser : this.lengthOData()}{this.props.currUser ? '' : this.state.userId}</p>
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
			<h3>New? Get an Id Today! Add Anime By <NavLink to="/search">Name</NavLink> or <NavLink to="/genre">Genre</NavLink></h3>
			<h4>Have an id? Log in to view your anime list!</h4>
		</div>
	}
	</div>
	)
	}
}

export default View;