import React, { useState } from 'react'
import '../../assets/styles/components/Navbar.scss'
import {FiMenu} from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	function toggleNavbar():void {
		setToggle((prevVal: Boolean) => !prevVal)
	}

	function scrollToHandler(num: number):void {
		window.scrollTo({top: num, behavior: "smooth"})
	}

  return (
	<div className="navbar">
		<div className='logoContainer'>
			<h3 className='logo' onClick={() => scrollToHandler(0)}>
				Grigoryan
			</h3>
		</div>  
			<div onClick={()=> toggleNavbar()}>
				{toggle ? 
					<IoMdClose className='menuBurgerX' /> 
					: 
					<FiMenu className='menuBurger'/> 
				}
			</div>
	  <nav className={toggle ? 'linksContainer open' : 'linksContainer'}>
			<ul className='links' onClick={toggleNavbar}>
				<li onClick={() => scrollToHandler(0)}>Home</li>
				<li onClick={() => scrollToHandler(600)}>About Me</li>
				<li onClick={() => scrollToHandler(1200)}>Experience</li>
				<li onClick={() => scrollToHandler(2200)}>Work</li>
				<li onClick={() => scrollToHandler(3050)}>Contacts</li>
			</ul>
	  </nav>
	  
 </div>
  )
}

export default Navbar