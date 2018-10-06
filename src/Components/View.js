import React from "react";
import Anime from './Anime';

const View = props => {
	return (
	<div className='App row'>
		<Anime data={props}/>
	</div>
	)
}

export default View;