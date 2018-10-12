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
	
	// when user logs in their anime list is retrieved from the db via json-server
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
	
	//when new or regular user adds or removes anime from their list content ids are restructured and posted to db 
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
	
	// when user adds or removes an anime from their list, the content in the db is deleted prior to the POST
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
	
	//when user clicks save, userId is stored in state and db is searched first by userId. 
	//If userId found, their animelist is updated via delete then post of anime list/id stored in state.
	//If no userId matches due to user being new, post function is called instead to create a new user: id, animelist
	saveAnimeList = (userId) => {
		this.setState({userId: userId})
		let url = `http://localhost:3004/user`
		fetch(url, {cache: "force-cache"})
		.then(res => res.json())
		.then(responseData => { responseData.map(users => {
			if(users.id === userId){
				return this.updateAnimeList(userId)
				}
			return false
			})
		})
		.catch(error => {
			console.log('Unable to save', error);
		});
		this.postAnimeList(userId)
	}
	
	//user adds anime to app state
	addAnime = (anime) => {
		let newAnime = {name: anime.canonicalTitle, img: anime.posterImage.medium, syn: anime.synopsis, id: (this.state.ListOfAnime.length)}
		this.setState(state =>{
			const ListOfAnime = [...state.ListOfAnime, newAnime]
			return {ListOfAnime}
		})
	};
	
	// user removes anime from app state
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
					getList={this.getAnimeList}
				/>	
				<Switch>
					<Route path="/Genre" component={Genre}/>
					<Route path="/View" 
						render={ () => 
								<View anime={this.state.ListOfAnime} 
									  remov={this.removeAnime} 
									  saveList={this.saveAnimeList} 
									  currUser={this.state.userId}
								/> 
							} 
					/>
					<Route path="/Search" component={Search}/>
					<Route exact path="/" component={About}/>
					<Route path="/Details" 
						render={ () => 
							<Details addAnime={this.addAnime} /> 
							}
					/>
					<Route component={NotFound}/>
				</Switch>
				<Footer />
		  </div>
	</BrowserRouter>
    );
  }
}

export default App;
