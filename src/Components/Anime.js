import React from 'react';

const Anime = props => (
	<div className="App-title col-3 m-5 p-3">
		<h5>{props.title}</h5>
		<img className="img-responsive" src={props.img} alt={props.title} />
		<p>{props.synopsis}</p>
	</div>
)

export default Anime;