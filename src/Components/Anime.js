import React, {Component} from 'react';

const Anime = props => (
	<div key={props.key}>
		<p>{props.name}</p>
		<img src={props.img} alt={props.name} />
	</div>
)

export default Anime;