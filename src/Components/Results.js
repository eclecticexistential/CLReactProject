import React from 'react';
import Anime from './Anime';

const Results = props => {
	let newAnime = props.animeList.map(anime => anime.attributes) //remove delete entries
	return (
	<div className='App row'>
		{newAnime.map((animes, key) => <Anime key={key} title={animes.canonicalTitle} img={animes.posterImage ? animes.posterImage.medium : ''} synopsis={animes.synopsis}/>)}
	</div>
	)
}

export default Results;