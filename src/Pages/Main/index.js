import React, { useState, useEffect } from 'react';
import './styles.css';
import { FaSearch, FaRegBell, FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";
import ReactPlayer from 'react-player';
import { getTopAnimes } from '../../Services/jikan';


function App() {
  const [topAnimes, setTopAnimes] = useState([{
    title: '',
    synopsis: '',
    trailer_url: ''
  }]);
  const [current, setCurrent] = useState(0);

  async function dadosAnime(){
    const data = await getTopAnimes();
    setTopAnimes(data);
    console.log(data);
  }

  useEffect(() => {
    dadosAnime();
  }, []);

  function handleNext(){
    if (current < 4){
      setCurrent(current + 1);
      return
    }

    else {
      setCurrent(0);
      return
    }
  }

  function handleBack(){
    if (current > 0){
      setCurrent(current - 1);
      return
    }

    else {
      setCurrent(4);
      return
    }
  }

  return (
    <div className="App">

      <header className="header">
        <div className='container flex-row content-between items-center'>
          <div className='left flex-row content-between'>
            <div className='logo'>
              <h3>NIMEFLIX</h3>
            </div>
            <div className='nav flex-row content-around items-center'>
              <span>Inicio</span>
              <span>Séries</span>
              <span>Filmes</span>
            </div>
          </div>

          <div className='right flex-row items-center content-end' >
            <FaSearch />
            <span>User</span>
            <FaRegBell />
            <div className='user-image'></div>
          </div>
        </div>
      </header>

      <main>
        <section className='highlights'>
          
          <div className='flex-row content-end'>
            <ReactPlayer 
            className='videoTops'
            url={topAnimes[current].trailer_url}
            playing={true}
            muted={true}
            width='cover'
            height='cover'
            />
          </div>
        
            <div className='container-info flex-row items-center'>
              <button type='button' 
                className='steps left'
                onClick={() => handleBack()}  
              >
                <FaStepBackward />
              </button>
              <div className='flex-column content-center items-start texts-info'>
                <h1 className='title'>{topAnimes[current].title}</h1>
                <span className='info'>{topAnimes[current].synopsis.substring(0, 150).concat('...')}</span>
                <button type='button' className='flex-row items-center play' >
                  <FaPlay className='margin-button'/>
                  ASSISTIR AGORA
                </button>
              </div>
              <button type='button' 
                className='steps right'
                onClick={() => handleNext()}    
              >
                <FaStepForward />
              </button>
          </div> 
        </section>
      </main>
    </div>
  );
}

export default App;
