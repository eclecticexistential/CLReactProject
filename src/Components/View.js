import React, {Component} from "react";
import {NavLink} from 'react-router-dom'; 

class View extends Component {
	constructor(){
		super();
		this.state = {
			animeId: '',
			cookie: 'woo'
		}
	}
	
	deleteAnime = e => {
		let id = e.target.value
		this.props.remov(id)
	};
	
	render() {
	let info = this.props.anime	
	return (
	<div className='view'>
	{info.length > 0 ? 
		(
		<div>
			<h2>List of Animes</h2>
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
		<h3>Add Some By Name <NavLink to="/search">Here</NavLink> or Genre <NavLink to="/genre">Here</NavLink></h3>
		</div>
	}
	</div>
	)
	}
}

export default View;