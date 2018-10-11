import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'; 


class Header extends Component {
	constructor(){
		super();
		this.state = {
			userId: '',
			check: false
		}
	}
	
	onUpdate = (e) => {
		this.setState({userId: e.target.value})
	}
	
	userLogOut = () => {
		this.props.log()
		this.setState({userId: '', check: false})
	}
	userLogIn = () => {
		let url = `http://localhost:3004/user`
		fetch(url)
		.then(res => res.json())
		.then(responseData => { responseData.map(users => {
			if(users.id === this.state.userId){
				return (this.props.login(this.state.userId),
						this.props.getList(this.state.userId)
				)}
			})
		})
	}
	render() {
		return (
	<header>
		<ul className="nav">
			<li><NavLink to="/search" activeStyle={{background:'aliceblue', color:'darkgreen', padding: '0.25em 0.1em'}}>Animes By Name</NavLink></li>
			<li><NavLink to="/view" activeStyle={{background:'aliceblue', color:'darkgreen', padding: '0.25em 0.1em'}}>Your Anime List</NavLink></li>
			<li><NavLink to="/genre" activeStyle={{background:'aliceblue', color:'darkgreen', padding: '0.25em 0.1em'}}>Get Anime By Genre</NavLink></li>
			<li><NavLink exact to="/" activeStyle={{background:'aliceblue', color:'darkgreen', padding: '0.25em 0.1em'}} >About Kitsu API</NavLink></li>
			{this.props.currUser ? 
				<li id='logout'><span>Hi {this.props.currUser}</span><button onClick={this.userLogOut}>Log Out</button></li>
				:
				<li><input className='mr-3' id='login' placeholder="Enter id" value={this.state.userId} onChange={this.onUpdate}/><button onClick={this.userLogIn}>Log In</button></li>
			}
		</ul>
	</header>
	)}
};

export default Header;