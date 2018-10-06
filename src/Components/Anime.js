import React from 'react';
import {Link, Route} from 'react-router-dom'; 
import Details from './Details';

const Anime = props => {
	return (
	<div className="col-lg-3" id='anime'>
		<h5>{props.title}</h5>
		<Link to="/details/anime" ><img className="img-responsive" src={props.img} alt={props.title} /></Link>
		<Route path='/details/anime' render={ () => <Details data={this.props.synopsis}/>}/>
	</div>
	)
}

export default Anime;