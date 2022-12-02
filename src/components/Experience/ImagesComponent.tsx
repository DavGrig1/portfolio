import React from 'react'
import HTMLImg from '../../assets/images/html.png'
import CSSImg from '../../assets/images/css.png'
import JSImg from '../../assets/images/javascript.png'
import ReactImg from '../../assets/images/react.png'
import ReduxImg from '../../assets/images/redux.png'
import GithubImg from '../../assets/images/github.png'
import SassImg from '../../assets/images/sass.png'
import TailwindImg from '../../assets/images/tailwind.png'

const ImagesComponent = () => {
	return (
	<>
		<div className='imageGrid'>
			<img src={HTMLImg} alt="HTML" className='image'/>
			<p>HTML</p>
		</div>
		<div className='imageGrid'>
			<img src={CSSImg} alt="CSS" className='image'/>
			<p>CSS</p>
		</div>
		<div className='imageGrid'>
			<img src={JSImg} alt="JS" className='image'/>
			<p>JavaScript</p>
		</div>
		<div className='imageGrid'>
			<img src={ReactImg} alt="React" className='image'/>
			<p>React</p>
		</div>
		<div className='imageGrid'>
			<img src={ReduxImg} alt="Redux" className='image'/>
			<p>Redux</p>
		</div>
		<div className='imageGrid'>
			<img src={GithubImg} alt="GH" className='image'/>
			<p>Github</p>
		</div>
		<div className='imageGrid'>
			<img src={SassImg} alt="SASS" className='image'/>
			<p>Sass</p>
		</div>
		<div className='imageGrid'>
			<img src={TailwindImg} alt="Tailwind" className='image'/>
			<p>TailwindCSS</p>
		</div>
	</>
	)
}

export default ImagesComponent