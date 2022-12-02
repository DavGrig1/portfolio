import '../../assets/styles/components/Work.scss'
import first from '../../assets/images/Ltemplate.png'
import second from '../../assets/images/template.png'
import React from 'react'

const lTemplateCode = 'https://github.com/DavGrig1/landing-template-for-startups'
const lTemplateDemo = 'https://davgrig1.github.io/landing-template-for-startups/'
const templateCode = 'https://github.com/DavGrig1/cloud-management'
const templateDemo = 'https://davgrig1.github.io/cloud-management/'

const Work = () => {

  return (
	 <div className='workContainer'>
		<h2 className='title'>Work</h2>
		<p className='comment'>// Check out some of my recent work</p>

	 	<div className='workGrid'>
			<div className='gridItem'>
				<img src={first} alt="/" />

				<div className='buttons'>
					<button onClick={() => window.open(lTemplateCode, '_blank')}
					 className='codeBtn'>
						Code
					</button>
					
					<button onClick={() => window.open(lTemplateDemo, '_blank')}
					 className='demoBtn'>
						Demo
					</button>
				</div>
			</div>

			<div className='gridItem'>
				<img src={second} alt="/" />

				<div className='buttons'>
					<button onClick={() => window.open(templateCode, '_blank')}
					 className='codeBtn'>
						Code
					</button>

					<button onClick={() => window.open(templateDemo, '_blank')}
					 className='demoBtn'>
						Demo
					</button>
				</div>
			</div>
		</div>
	 </div>
  )
}

export default Work