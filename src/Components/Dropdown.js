import React, {Component} from 'react';

class Dropdown extends Component {
	constructor(){
		super();
	this.state = {
		pickedGenre: '',
		Genres:[
		{genre: "Comedy"},{genre:"Fantasy"},{genre:"Romance"},{genre:"Action"},{genre:"School Life"},{genre:"Tragedy"},{genre:"Adventure"},{genre:"Shoujo Ai"},
		{genre:"Daily Life"},{genre:"Science Fiction"},{genre:"Yaoi"},{genre:"Sports"},{genre:"Japan"},{genre:"Earth"},{genre:"Thriller"},{genre:"Historical"},{genre:"Present"},
		{genre:"Mystery"},{genre:"Asia"},{genre:"Harem"},{genre:"Magic"},{genre:"Kids"},{genre:"Horror"},{genre:"Mecha"},{genre:"Music"},{genre:"Psychological"},
		{genre:"Super Power"},{genre:"Shounen Ai"},{genre:"Martial Arts"},{genre:"Demon"},{genre:"Military"},{genre:"Plot Continuity"},{genre:"Motorsport"},{genre:"Fantasy World"},
		{genre:"Parody"},{genre:"Violence"},{genre:"Space"},{genre:"Future"},{genre:"Contemporary Fantasy"},{genre:"Past"}
		]
	};
	}
	
	addAnimeInfo = (info) => {
		this.props.addAnimeInfo(info)
	}
	
	getAnimeCat = (genre) => {		
		const url = 'https://kitsu.io/api/edge/anime?filter[genres]=' + genre;
		fetch(url)
		.then(res => res.json())
		.then(responseData => {
			this.addAnimeInfo(responseData)
		})
		.catch(error => {
			console.log('Error fetching data', error);
		});
	}
	
	onGenreChange = e => {
		this.setState({pickedGenre: e.target.value});
		this.getAnimeCat(e.target.value);
	}
	
	render(){
		const orderedList = this.state.Genres;
			return(
			<select 
			id="genres" 
			value={this.state.pickedGenre}
			onChange={this.onGenreChange}
			>
			<option value="">Genres</option>
			{orderedList.map((item, key) => 
			<option key={key} value={item.genre}>
				{item.genre}
				</option>
			)}
			</select>
			)
		}
	}

	export default Dropdown;