import React, { Component } from 'react';
import Dropdown from './Components/Dropdown.js';
import Results from './Components/Results.js';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			Animes:[]
		}
	}
  render() {
    return (
      <div className="App">
        <h1>Get Your Anime Stats Here</h1>
		<Dropdown animeList={this.state.Animes}/>
		<Results animeList={this.state.Animes}/>
      </div>
    );
  }
}

export default App;
