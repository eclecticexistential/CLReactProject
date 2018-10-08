import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import Genre from './Components/Genre';
import Header from './Components/Header';
import View from './Components/View';
import Search from './Components/Search';
import NotFound from './Components/NotFound';
import About from './Components/About';
import Footer from './Components/Footer';
import Details from './Components/Details';

class App extends Component {
	constructor(){
		super();
		this.state = {
			ListOfAnime: []
		}
	}
	
	getAnimeList = (id) => {
		fetch('http://localhost:3004/user/'+id)
		.then(res => res.json())
		.then(responseData => {
			this.setState({ListOfAnime: responseData.AnimeList})
		})
		.catch(error => {
			console.log('Error fetching data', error);
		});
	}
	
	saveAnimeList = (id) => {
		fetch('http://localhost:3004/users/'+id+'/AnimeList',{
			method: 'POST',
			headers: {
				'Accept':'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user: id,
				AnimeList: this.state.ListOfAnime,
			})
		})
		.catch(error => {
			console.log('Error saving info', error);
		});
	}

	
	addAnime = (anime) => {
		let newAnime = {name: anime.canonicalTitle, img: anime.posterImage.medium, syn: anime.synopsis, id: (this.state.ListOfAnime.length)}
		this.setState(state =>{
			const ListOfAnime = [...state.ListOfAnime, newAnime]
			return {ListOfAnime}
		})
	};
	
	removeAnime = (animeId) => {
		let filteredAnime = this.state.ListOfAnime.filter(item => item.id !== parseInt(animeId))
		this.setState(state => ({
			ListOfAnime: filteredAnime
		}));
	};
	
  render() {
    return (		  
	<BrowserRouter>
		  <div className="App">
				<Header />	
				<Switch>
					<Route path="/Genre" component={Genre}/>
					<Route path="/View" render={ () => <View anime={this.state.ListOfAnime} remov={this.removeAnime} saveList={this.saveAnimeList} getList={this.getAnimeList}/> } />
					<Route path="/Search" component={Search}/>
					<Route exact path="/" component={About}/>
					<Route path="/Details" render={ () => <Details addAnime={this.addAnime} /> }/>
					<Route component={NotFound}/>
				</Switch>
				<Footer />
		  </div>
	</BrowserRouter>
    );
  }
}

export default App;
