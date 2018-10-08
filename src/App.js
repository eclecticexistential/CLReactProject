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
			ListOfAnime: [],
		}
	}
	
	getAnimeList = (id) => {
		let url = `http://localhost:3004/user/${id}`
		fetch(url)
		.then(res => res.json())
		.then(responseData => {
			this.setState({ListOfAnime: responseData.AnimeList})
		})
		.catch(error => {
			console.log('Error fetching data', error); //can you reroute to your anime list page?
		})
	}
	
	postAnimeList = (id) => {
		let url = `http://localhost:3004/user`
			fetch(url, {
				method: 'POST',
				headers: {
					'Accept':'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					"id": id,
					"AnimeList": this.state.ListOfAnime,
				})
			})
			.catch(error => {
				console.log('Error saving new user info', error);
			});
	}
	
	updateAnimeList = (id) => {
		let url = `http://localhost:3004/user/${id}`
			fetch(url, {
				method: 'DELETE',
				headers: {
					'Accept':'application/json',
					'Content-Type': 'application/json',
				},
			})
			.catch(error => {
				console.log('Error deleting info', error);
			});
			return this.postAnimeList(id)
	}
	
	saveAnimeList = (id) => {
		let url = `http://localhost:3004/user`
		fetch(url)
		.then(res => res.json())
		.then(responseData => {
			if(responseData[id].id !== parseInt(id)){
				return this.postAnimeList(id)
			}
			if(responseData[id].id === parseInt(id)){
				return this.updateAnimeList(id)
			}
		})
		.catch(error => {
				console.log('User does not exist', error);
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
					<Route path="/View" render={ () => <View anime={this.state.ListOfAnime} remov={this.removeAnime} saveList={this.saveAnimeList} getList={this.getAnimeList} /> } />
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
