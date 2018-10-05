import React, { Component } from 'react';
import Results from './Components/Results';
import {Route, BrowserRouter, NavLink} from 'react-router-dom';
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
			<BrowserRouter>
				<header>
					<ul className="nav">
						<li><NavLink to="/search" activeClassName="activeWooName">Animes By Name</NavLink></li>
						<li><NavLink exact to="/" activeStyle={{background: 'aliceblue', padding: '0.15em'}}>Get Anime By Genre</NavLink></li>
						<li><NavLink to="/view">Your Anime List</NavLink></li>
						<li><NavLink to="/about">About Kitsu Api</NavLink></li>
					</ul>
				</header>		
			</BrowserRouter>
			<Dropdown addAnimeInfo={this.addAnimeInfo}/>
			{this.state.picked === true ? <Results animeList={this.state.Animes}/> : <p className='pink'>Pick a genre</p>}
		  </div>
    );
  }
}

export default App;
