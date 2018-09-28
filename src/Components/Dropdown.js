import React {Component} from 'react';

class Dropdown extends Component {
	state={
		Animes=[
		{
			name: "",
			img: ""
		}
		]
		Genres=[
			{genre: "Comedy"},
			{genre:"Fantasy"},
			{genre:"Romance"},
			{genre:"Action"},
			{genre:"School Life"},
			{genre:"Tragedy"},
			{genre:"Adventure"},
			{genre:"Shoujo Ai"},
			{genre:"Daily Life"},
			{genre:"Science Fiction"},
			{genre:"Yaoi"},
			{genre:"Sports"},
			{genre:"Japan"},
			{genre:"Earth"},
			{genre:"Thriller"},
			{genre:"Historical"},
			{genre:"Present"},
			{genre:"Mystery"},
			{genre:"Asia"},
			{genre:"Harem"},
			{genre:"Magic"},
			{genre:"Kids"},
			{genre:"Horror"},
			{genre:"Mecha"},
			{genre:"Music"},
			{genre:"Psychological"},
			{genre:"Super Power"},
			{genre:"Shounen Ai"},
			{genre:"Martial Arts"},
			{genre:"Demon"},
			{genre:"Military"},
			{genre:"Plot Continuity"},
			{genre:"Motorsport"},
			{genre:"Fantasy World"},
			{genre:"Parody"},
			{genre:"Violence"},
			{genre:"Space"},
			{genre:"Future"},
			{genre:"Contemporary Fantasy"},
			{genre:"Past"},
			]
		}
	
	getAnimeCat =(genre) => {
		const url = 'https://kitsu.io/api/edge/anime?filter[genres]=' + genre;
		fetch(url)
		.then(res => res.json())
		.then(responseJson => responseJson.map(item => {
			this.setState({
					Animes: {
						name: item.data.attributes.canonicalTitle,
						img: item.data.attributes.posterImage.medium
					}
			}
			)
		}
		.catch(error => console.log('Looks like there was a problem', error))
		
	}
	
	render(){
		const orderedList = this.state.Genres
		const animes = this.state.Animes
			return(
			<select id="genres" value={optionState} onChange={this.getAnimeCat}>
				<option name="Genres">Genres</option>
			{orderedList.map((item, key) => 
			<option key={key} value={item.genre}>{item.genre}<option>
			)}
			</select>
			<Results animes={animes}/>
			)
		}
	}

	export default Dropdown;