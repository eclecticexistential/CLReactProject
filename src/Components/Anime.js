import React from 'react';
import {NavLink} from 'react-router-dom'; 


const Anime = props => {
	return (
	<div className="col-lg-3" id='anime'>
		<h5>{props.title}</h5>
		<NavLink to={`/details/${props.title}`} ><img className="img-responsive" src={props.img} alt={props.title} /></NavLink>
	</div>
	)
}

export default Anime;