import { useState, useEffect } from 'react'
import About from './components/About.jsx'
import getData from './utils/getData.js'
import PeopleTabs from './components/PeopleTabs.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import './App.css'
import Degrees from './components/Degrees.jsx'
import Minors from './components/Minors.jsx'
import Employment from './components/Employment.jsx'

const App=()=>{

  const [aboutLoaded, setAboutLoaded] = useState(false);
  const [about, setAbout] = useState();

  useEffect(()=>{
    getData('about/').then(
      (json)=>{
        setAbout(json);
        setAboutLoaded(true);
      }
    )
  }, []);

  return(
    <div>
      <Navbar/>
      <Hero/>
      {aboutLoaded ? <About ad={about}/> : 
      <div className='flex w-full justify-center items-center'>
        <h1>Loading...</h1>
      </div>
      }
      <Degrees />
      <Minors />
      <Employment />
      <PeopleTabs />

      <Footer />
    </div>
  )
}

export default App