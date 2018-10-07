import React from 'react';
import {NavLink} from 'react-router-dom'; 


const Header = () => (
	<header>
		<ul className="nav">
			<li><NavLink to="/search" activeStyle={{background:'aliceblue', color:'darkgreen', padding: '0.25em 0.1em'}}>Animes By Name</NavLink></li>
			<li><NavLink to="/view" activeStyle={{background:'aliceblue', color:'darkgreen', padding: '0.25em 0.1em'}}>Your Anime List</NavLink></li>
			<li><NavLink to="/genre" activeStyle={{background:'aliceblue', color:'darkgreen', padding: '0.25em 0.1em'}}>Get Anime By Genre</NavLink></li>
			<li><NavLink exact to="/" activeStyle={{background:'aliceblue', color:'darkgreen', padding: '0.25em 0.1em'}} >About Kitsu API</NavLink></li>
		</ul>
	</header>
);

export default Header;