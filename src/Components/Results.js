import React from 'react';
import Anime from './Anime';

const Results = props => {
	let newAnime = props.animeList.map(anime => anime.attributes)
	let filteredAnime = newAnime.filter(anime => anime.canonicalTitle !== 'Delete')
	return (
	<div>
		{filteredAnime.length > 0 ?
		<div className='App row'>
		{filteredAnime.map((animes, key) => 
			<Anime 
				key={key} 
				title={animes.canonicalTitle} 
				img={animes.posterImage ? animes.posterImage.medium : ''} synopsis={animes.synopsis}
			/>
		)}
		</div>
			:
			<h5>Try another genre.</h5>
			}
	</div>
	)
}

export default Results;