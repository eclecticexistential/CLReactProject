import React from 'react';

const Anime = props => (
	<div>
		<h2>{props.title}</h2>
		<img src={props.img} alt={props.title} />
		<p>{props.synopsis}</p>
	</div>
)

export default Anime;