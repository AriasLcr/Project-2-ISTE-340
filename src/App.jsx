/* eslint-disable react/no-unescaped-entities */

import {useState, useEffect} from 'react'
import About from './components/About.jsx'
import People from './components/People.jsx'
import getData from './utils/getData.js'


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
      <div className='stick'>
        <h1>Welcome to Gabe's iSchool Site</h1>
        <div>LOADING...</div>
      </div>
    </>
  )

  return(
    <>
      <div className='stick'>
        <h1>Welcome to Gabe's iSchool Site</h1>
        <div>...Menu of some sort...</div>
      </div>
      
      <div className='App'>
        <About ad={about}/>
        <People />
      </div>
    </>
  )
}

export default App