import React, { useState, useEffect } from 'react';
import './styles.css';
import { FaSearch, FaRegBell, FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";
import ReactPlayer from 'react-player';
import { getTopAnimes } from '../../Services/jikan';
import Sections from '../../Components/Sections';

function App() {
  const [topAnimes, setTopAnimes] = useState([{
    title: '',
    synopsis: '',
    trailer_url: '',
    img_url: ''
  }]);
  const [current, setCurrent] = useState(0);

  async function dadosAnime(){
    const data = await getTopAnimes();
    setTopAnimes(data);
  }

  useEffect(() => {
    dadosAnime();
  }, []);

  function handleNext(){
    setCurrent(topAnimes.length === current + 1 ? 0 : current + 1);
    return
  }

  function handleBack(){
    setCurrent(current === 0 ? topAnimes.length - 1 : current - 1);
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

          {topAnimes.map((anime, index) => (
            <div className={index === current ? 'slide-in' : 'slide-out'}>
              {index === current && (
                <div>
                 
                  <div className='flex-row content-end'>
                  
                    <ReactPlayer 
                      className='videoTops'
                      url={anime.trailer_url}
                      playing={true}
                      muted={true}
                      width='cover'
                      height='cover'
                      onEnded = {() => handleNext()}
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
                      <h1 className='title'>{anime.title.length <= 20 ? anime.title : anime.title.substring(0,30).concat('...')}</h1>
                      <span className='info'>{anime.synopsis.length <= 150 ? anime.synopsis : anime.synopsis.substring(0, 150).concat('...')}</span>
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
              </div>
              )}
            </div>
          ))
          }
        </section>

        <section className='sections'>
          <div className="populars">
            <Sections 
            animes = {topAnimes}
            sectionName = {'Top Animes da Temporada'}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
