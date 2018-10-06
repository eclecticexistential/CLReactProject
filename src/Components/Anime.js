import React from 'react';
import {NavLink} from 'react-router-dom'; 


const Anime = props => {
	console.log(props)
	return (
	<div className="col-lg-3" id='anime'>
		<h5>{props.title}</h5>
		<NavLink to={{pathname:`/details/${props.title}`, state: {props}}} ><img className="img-responsive" src={props.img} alt={props.title} /></NavLink>
	</div>
	)
}

export default Anime;