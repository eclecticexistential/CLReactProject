import React, { Component } from 'react';
import Dropdown from './Components/Dropdown.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			Animes:[],
		};
	}
	
	getAnimeCat = (genre) => {		
		const url = 'https://kitsu.io/api/edge/anime?filter[genres]=' + genre;
		fetch(url)
		.then(res => res.json())
		.then(responseData =>{
			this.setState({Animes: responseData.data.attributes});
		})
		.catch(error => {
			console.log('Error fetching data', error);
		});
	}
	
  render() {
    return (
      <div className="App">
        <h1>Get Your Anime Stats Here</h1>
		<Dropdown onChange={this.getAnimeCat}/>
		<Results />
      </div>
    );
  }
}

export default App;
