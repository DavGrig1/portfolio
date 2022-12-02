import React from 'react'
import './assets/styles/index.scss'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Credits from './components/Credits/Credits';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Work from './components/Work/Work';

function App() {

  return (
    <div className='appComponent'>
      <Navbar/>
      <Credits />

      <div className='appContainer'>
        <Header />
        <About />
        <Experience />
        <Work />
      </div>
      
      <Contact />
    </div>
  );
}

export default App;
