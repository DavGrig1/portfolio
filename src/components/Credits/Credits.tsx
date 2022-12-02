import React from 'react'
import '../../assets/styles/components/Credits.scss'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';

const Credits = () => {

	const linkedinURL = 'https://www.linkedin.com/in/davit-grigoryan-346589144/'
	const gitHubURL = 'https://github.com/DavGrig1'
	const mailURL = 'https://mail.google.com/mail/?view=cm&fs=1&to=davgrig1906@gmail.com'

  return (
		<div className='credits'>
			<div className='linkedin' onClick={() => window.open(linkedinURL, '_blank')} >
				<p>LinkedIn</p> <FaLinkedin className='linkedinIcon'/>
			</div>
			<div className='github' onClick={() => window.open(gitHubURL, '_blank')}>
				<p>Github</p> <FaGithubSquare className='githubIcon'/>
			</div>
			<div className='mail' onClick={() => window.open(mailURL, '_blank')}>
				<p>Mail me</p> <MdMailOutline className='mailIcon'/>
			</div>
		</div>
  )
}

export default Credits