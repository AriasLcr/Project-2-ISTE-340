import {useState, useEffect} from 'react'
import About from './components/About.jsx'
import getData from './utils/getData.js'
import PeopleTabs from './components/PeopleTabs.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

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

  if(!aboutLoaded) return(
    <>
      <Navbar/>
      <div>
        <div>LOADING...</div>
      </div>
    </>
  )

  return(
    <div>
      <Navbar/>
      <div className='px-20'>
        <About ad={about}/>
        <PeopleTabs />
      </div>
    </div>
  )
}

export default App