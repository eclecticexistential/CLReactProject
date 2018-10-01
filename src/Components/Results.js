import React, {Component} from 'react';
import Anime from 'Anime';

const Results = props => {
	const dataset = props.data;
	let animes = dataset.map((anime, key) =>
		<Anime name={anime.canonicalTitle} img={anime.posterImage.medium} key={key} />
	)
		return (
		<div>
		{animes}
		</div>
		)
}

export default Results;