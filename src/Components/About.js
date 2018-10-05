import React from 'react';

const About = () => {
	return (
		<div className='about'>
			<h2 className='p-3'>Kitsu - Explore All of the Anime</h2>
			<p>According to <a href='https://en.wikipedia.org/wiki/Kitsune'>Wiki</a>, Kitsu represented the yelp of a fox at one point in time.
			These days, the fox sound is usually described as 'kon kon'. 
			</p>
			<img className='img-responsive' src='https://s3.amazonaws.com/gs-geo-images/0b119fd3-2b7a-4040-81cb-ef58b24b84d5.jpg' alt='fox' />
			<p>
			With this change, the word Kitsu evolved to include -Ne at the end of it to denote affection.
			Now, 'Kitsune' means fox and 'Kitsu' has become archaic.
			</p>
			<img className='img-responsive' id='img2' src='https://s.abcnews.com/images/Lifestyle/ht_pudding_the_fox_03_mt_140821_12x5_992.jpg' alt='fox' />
			<p>
			These days, however, Kitsu is used as the name of an anime api.
			</p>
			<p>
			More specifically, it is the name of the API used for this app.
			For more information, check out the Kitsu <a href='https://kitsu.docs.apiary.io/'>docs</a>.
			</p>
		</div>
	)
}

export default About;