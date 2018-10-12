import React from 'react';

const About = () => {
	return (
		<div className='about'>
			<h2 className='p-3'>Kitsu - Explore All of the Anime</h2>
			<p>According to <a href='https://en.wikipedia.org/wiki/Kitsune'>Wiki</a>, Kitsu represented the yelp of a fox a long time ago.</p>
			<p>Since then, the sound a fox makes has become known as 'kon kon' or 'gon gon'.</p>
			<img className='img-responsive' src='https://s3.amazonaws.com/gs-geo-images/0b119fd3-2b7a-4040-81cb-ef58b24b84d5.jpg' alt='fox' />
			<p>With this description change, the word Kitsu evolved.</p>
			<p>People started adding -Ne, denoting affection, to the end of kitsu, transforming the word.</p>
			<p>Now, 'Kitsune' means fox, whereas 'Kitsu' is not used and thus has become archaic.</p>
			<img className='img-responsive' id='img2' src='https://s.abcnews.com/images/Lifestyle/ht_pudding_the_fox_03_mt_140821_12x5_992.jpg' alt='fox' />
			<p>Nevertheless, these days Kitsu is used as the name of an anime api.</p>
			<p>More specifically, it is the name of the API used for this app.</p>
			<p>For more information, check out the Kitsu <a href='https://kitsu.docs.apiary.io/'>docs</a>.</p>
		</div>
	)
}

export default About;