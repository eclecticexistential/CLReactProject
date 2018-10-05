import React from 'react';
import {Link} from 'react-router-dom'; 


const Header = () => (
	<header>
		<ul className="nav">
			<li><Link to="/search" >Animes By Name</Link></li>
			<li><Link to="/view">Your Anime List</Link></li>
			<li><Link to="/genre">Get Anime By Genre</Link></li>
			<li><Link exact to="/" >About Kitsu API</Link></li>
		</ul>
	</header>
);

export default Header;