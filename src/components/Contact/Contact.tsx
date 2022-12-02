import React from 'react'
import '../../assets/styles/components/Contact.scss'

const Contact = () => {

  return (
	 <footer className='contactContainer'>
		<div className='contacts'>
			<div>
				<h2>Contacts</h2>
			</div>
			<div>
				<p>Phone: +374 96 82 65 66</p>
				<p>Mail: davgrig1906@gmail.com</p>
				<p>Adress: Arshakunyac 18str. Yerevan, Armenia</p>
			</div>
		</div>

		<form 
		 method='POST' 
		 action='https://getform.io/f/052b7592-31de-41e3-83d4-a65efd6e302a' 
		 className='collaborateForm'>
			<input type="text" name="name" className='nameField' placeholder='Name'/>
			<input type="email" name="email" className='mailField' placeholder='Mail'/>
			<textarea className='textField' name='message'/>
			<button>Lets Collaborate</button>
		</form>

	 </footer>
  )
}

export default Contact