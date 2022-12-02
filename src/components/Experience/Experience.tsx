import React from 'react'
import '../../assets/styles/components/Experience.scss';
import ImagesComponent from './ImagesComponent';

const Experience = () => {
	return (
		<div className='experience'>
				<h2 className='title'>Experience</h2>
				<p className='comment'>// These are technologies I've worked with</p>
			<div className='imgContainer'>
				<ImagesComponent />
			</div>
		</div>
	)
}

export default Experience