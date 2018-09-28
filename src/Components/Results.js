import React {Component} from 'react';
import PropType from 'prop-types';

const Results = (props) => {
	render(){
		return (
		{
			props.map((anime, key) => {
			<div key={key}>
				<p>{anime.name}</p>
				<img src={anime.img} alt={anime.name} />
			</div>
			}
		}
		)
	}
}

Results {
	animes: PropType.array.isRequired
}

export default Results;