import React, { Component } from 'react';
import Results from './Results';

class Search extends Component {
	constructor(){
		super();
	this.state = {
		animeName:'',
		animeStats: [],
		picked: false
	}
	}
	getAnimeStats = (name) => {
		let woSpace = name.replace(' ', '%20')
		this.setState({animeName: woSpace})
		const url = 'https://kitsu.io/api/edge/anime?filter[text]=' + woSpace;
		fetch(url)
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
		<div>
		<h1 className='m-3'>Look Up Anime By Name</h1>
			<form onSubmit={this.onSubmit} className='extraSpace'>
				<input type="search"
				name="search"
				ref={(input) => this.query = input}
				placeholder="Name Your Anime"
				className='mr-4'/>
				<button type="submit" id="submit">Submit</button>
			</form>
			{this.state.picked === true ? <Results animeList={this.state.animeStats}/> : <p className='extraSpace'></p>}
		</div>
		)
	}
}

export default Search;