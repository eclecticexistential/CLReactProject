import React, {Component} from 'react';
import Results from './Results';

class Dropdown extends Component {
	constructor(){
		super();
	this.state = {
		Animes: [],
		pickedGenre: '',
		picked: false,
		links: [],
		Genres:[
			{genre:"Action"},{genre:"Adventure"},{genre: "Comedy"},{genre:"Fantasy"},{genre:"Harem"},{genre:"Historical"},{genre:"Horror"},{genre:"Kids"},
			{genre:"Magic"},{genre:"Martial Arts"},{genre:"Mecha"},{genre:"Military"},{genre:"Music"},{genre:"Mystery"},
			{genre:"Parody"},{genre:"Psychological"},{genre:"Romance"},{genre:"School Life"},{genre:"Shoujo Ai"},{genre:"Shounen Ai"},
			{genre:"Space"},{genre:"Sports"},{genre:"Super Power"},{genre:"Thriller"},{genre:"Yaoi"},
			]	
		};
	}
	
	//gets different animes based on genre chosen
	getAnimeCat = (genre) => {	
		this.setState({links: []})
		const url = 'https://kitsu.io/api/edge/anime?filter[genres]=' + genre + '&page[limit]=20';
		fetch(url, {cache: "force-cache"})
		.then(res => res.json())
		.then(responseData => {
			let nextUp = [responseData.links.next, responseData.links.last]
			this.setState({links: nextUp})
			this.setState({Animes: responseData.data})
		})
		.catch(error => {
			console.log('Error fetching data', error);
		});
	}
	
	//adjusts message based on whether or not user has picked an anime genre
	onGenreChange = e => {
		this.getAnimeCat(e.target.value);
		this.setState({pickedGenre: e.target.value});
		this.setState({picked: true});
	}
	
	render(){
		const orderedList = this.state.Genres;
			return(
			<div className='genre'>
				{this.state.picked === false ? <h1>Find a New Anime By Genre Below</h1> : <h3>Click Animes For More Info</h3> }
					<select 
						id="genres" 
						value={this.state.pickedGenre}
						onChange={this.onGenreChange}
						className="optSel"
					>
					<option value="">Genres</option>
						{orderedList.map((item, key) => 
							<option key={key} value={item.genre}>
								{item.genre}
							</option>
				)}
				</select>
				{this.state.picked === true ? <Results animeList={this.state.Animes} /> : <p></p> }
			</div>
			)
		}
	}

	export default Dropdown;