import React, { Component } from 'react';
import Results from './Components/Results';

import Dropdown from './Components/Dropdown';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			Animes:[],
			picked:false
		}
	}
	
	addAnimeInfo = (animes) => {
		this.setState({Animes: animes})
		this.setState({picked: true})
	}
	
  render() {
    return (
		  <div className="App my-3">
			<h1 className="App-title p-3">Get Your Anime Stats Here</h1>
			<Dropdown addAnimeInfo={this.addAnimeInfo}/>
			{this.state.picked ? <Results animeList={this.state.Animes}/> : <p className='pink'>Pick another genre</p>}
		  </div>
    );
  }
}

export default App;
