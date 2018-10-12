import React, { Component } from 'react';
import Results from './Results';

class Search extends Component {
	constructor(){
		super();
		this.state = {
			animeStats: [],
			picked: false
		}
	}
	
	//users can search by anime name
	getAnimeStats = (name) => {
		let woSpace = name.replace(' ', '%20')
		const url = 'https://kitsu.io/api/edge/anime?filter[text]=' + woSpace;
		fetch(url, {cache: "force-cache"})
		.then(res => res.json())
		.then(responseData => {
			this.setState({animeStats: responseData.data})
			this.setState({picked: true})
		})
		.catch(error => {
			console.log('Error fetching data', error);
		});
	}
	
	onSubmit = e => {
		e.preventDefault();
		this.getAnimeStats(this.query.value);
		e.currentTarget.reset();
	}
	
render(){
		return (
		<div className='search'>
		<h1 className='m-3'>Search Anime By Name</h1>
			<form onSubmit={this.onSubmit} className='extraSpace'>
				<input 
					type="search"
					name="search"
					ref={(input) => this.query = input}
					placeholder="Name Your Anime"
				/>
				<button type="submit" id="submit">Submit</button>
			</form>
			{this.state.picked === true && <Results animeList={this.state.animeStats}/>}
		</div>
		)
	}
}

export default Search;