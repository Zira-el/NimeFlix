import React from 'react';
import './styles.css';
import { FaSearch, FaRegBell, FaPlay } from "react-icons/fa";
import ReactPlayer from 'react-player'


function App() {
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
            className='demo'
            url={'https://www.youtube.com/embed/3snByVaQUF0?enablejsapi=1&wmode=opaque&autoplay=1'}
            playing={true}
            muted={true}
            width='cover'
            height='80vh'
            left='auto'
            />
          </div>
        

          <div className='container-info flex-column content-center items-start'>
            <h1 className='title'>Dragon Ball</h1>
            <span className='info'>Informações do anime</span>
            <button type='button' className='flex-row items-center' >
              <FaPlay className='margin'/>
              ASSISTIR AGORA
              </button>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
