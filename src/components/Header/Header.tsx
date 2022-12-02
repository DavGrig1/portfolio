import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import '../../assets/styles/components/Header.scss'

const Header = () => {

  return (
		<header className='header'>
			<div className='main' >
				<span>Hi, my name is</span>
				<h1 className='name'>Davit Grigoryan</h1>
				<h1 className='profession'>I'm a Front-end Developer</h1>
				<p className='about'>
					I'm a front-end developer specializing in building (and occasionally designing) UI applications. 
					Currently, I'm focused on building responsive front-end web applications. 
				</p>
				<button className='button' onClick={() => window.scrollTo({top: 2200, behavior: "smooth"})}>
					View Work <FiArrowRight className='arrow'/>
				</button>
			</div>
		</header>
  )
}

export default Header