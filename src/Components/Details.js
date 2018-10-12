import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Details extends Component {
	constructor(){
		super();
		this.state = {
			animeStat: []
		}
	}
	
	//add anime to app state
	addAnime = () => {
		this.props.addAnime(this.state.animeStat[0]);
		alert("Added.")
	};
	
	//gets anime details from db when component mounts
	async componentDidMount() {
		let urlLoc = window.location.href
		let nameOnly = urlLoc.split('/').pop();
		let woSpace = nameOnly.replace('%20', ' ')
		const url = 'https://kitsu.io/api/edge/anime?filter[text]=' + woSpace + '&page[limit]=1';
		await fetch(url)
		.then(res => res.json())
		.then(responseData => {
			this.setState({animeStat: responseData.data.map(anime => anime.attributes)})
		})
		.catch(error => {
			console.log('Error fetching data', error);
		});
	}
	
	render() {
		let animeName = ''
		let animeImg = ''
		let animeSyn = ''
		if(this.state.animeStat[0]){
		 animeName = this.state.animeStat[0].canonicalTitle
		 animeImg = this.state.animeStat[0].posterImage.medium
		 animeSyn = this.state.animeStat[0].synopsis
		}
		return (
		<div className='container'>
		{this.state.animeStat[0] ?
			<div className='row' id='details'>
				<div className='col-lg-3'>
					<h1>{animeName}</h1>
				</div>
				<div className='col-lg-3'>
					<img className="img-responsive" src={animeImg} alt={'Poster of '+ animeName} />
				</div>
				<div className='col-lg-3'>
					<p>{animeSyn}</p>
					<button onClick={this.addAnime}>Click to Add</button>
					<hr />
					<Link to="/View" >Click to View List</Link>
				</div>
			</div>
			:
			<h1 className='pink'>Loading...</h1>
		}
		</div>
		)
	}
}

export default Details;