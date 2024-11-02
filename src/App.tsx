// load stuff

import './App.css';
import { useState, useEffect } from 'react';
//GetData
import getData from './utils/getData.js';
import About from './components/About.js';
// my Component

const App = () => {

  const [loaded, setAboutLoaded] = useState(false);
  const [about, setAbout] = useState();

  useEffect(() => {
    getData('about/').
      then((json) => {
          setAbout(json);
          setAboutLoaded(true);
        }
      );
    setAboutLoaded(true);
  }, [])


  if (!loaded){
    return (
      <>
        <h1>LOADING...</h1>
      </>
    );
  }
  return (
    <>
      <div className='sticky top-0'>
        <h1 className='text-3xl font-bold'>hi</h1>
        <div>
          <h1>Welcome to Gabe's iSchool Website.</h1>
        </div>
      </div>

      <div>
        <About ad={}/>
      </div>
    </>
        
  );
}

export default App;