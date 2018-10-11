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
			userId: ''
		}
	}
	
	getAnimeList = (id) => {
		let url = `http://localhost:3004/user/${id}`
		fetch(url)
		.then(res => res.json())
		.then(responseData => {
			this.setState({ListOfAnime: responseData.AnimeList})
			this.setState({userId: id})
		})
		.catch(error => {
			console.log('Error fetching data', error); //can you reroute to your anime list page?
		})
	}
	
	userLogOut = () => {
		this.setState({userId: ''})
		this.setState({ListOfAnime: []})
	}
	
	userLogIn = (userId) =>{
		this.setState({userId: userId})
	}
	
	postAnimeList = (userId) => {
		let updatedAnimeId = this.state.ListOfAnime.map((anime, index) => {
			anime.id = index
			return (
			anime
			)
		})
		let url = `http://localhost:3004/user/`
			fetch(url, {
				method: 'POST',
				headers: {
					'Accept':'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					"id": userId.toString(),
					"AnimeList": updatedAnimeId,
				})
			})
			.catch(error => {
				console.log('Error saving new user info', error);
			});
	}
	
	updateAnimeList = (userId) => {
		let url = `http://localhost:3004/user/${userId}`
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
			return this.postAnimeList(userId)
	}
	
	saveAnimeList = (userId) => {
		this.setState({userId: userId})
		let url = `http://localhost:3004/user`
		fetch(url)
		.then(res => res.json())
		.then(responseData => { responseData.map(users => {
			if(users.id === userId){
				return this.updateAnimeList(userId)
				}
			})
		})
		.catch(error => {
			console.log('Unable to save', error);
		});
		this.postAnimeList(userId)
	}
	
	addAnime = (anime) => {
		let newAnime = {name: anime.canonicalTitle, img: anime.posterImage.medium, syn: anime.synopsis, id: (this.state.ListOfAnime.length)}
		this.setState(state =>{
			const ListOfAnime = [...state.ListOfAnime, newAnime]
			return {ListOfAnime}
		})
	};
	
	removeAnime = (animeId) => {
		let getDigit = parseInt(animeId, 10)
		let filteredAnime = this.state.ListOfAnime.filter(item => item.id !== getDigit)
		this.setState(state => ({
			ListOfAnime: filteredAnime
		}));
	};
	
  render() {
    return (		  
	<BrowserRouter>
		  <div className="App">
				<Header 
				currUser={this.state.userId} 
				log={this.userLogOut} 
				login={this.userLogIn}
				getList={this.getAnimeList}/>	
				<Switch>
					<Route path="/Genre" component={Genre}/>
					<Route path="/View" render={ () => 
						<View anime={this.state.ListOfAnime} 
							  remov={this.removeAnime} 
							  saveList={this.saveAnimeList} 
							  currUser={this.state.userId}
						/> } />
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
