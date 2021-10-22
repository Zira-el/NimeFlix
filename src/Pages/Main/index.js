import React from 'react';
import './styles.css';

import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='container flex-row content-center items-center'>
          <div className='left flex-row content-between'>
            <div className='logo'>
              <h3>NIMEFLIX</h3>
            </div>
            <div className='nav flex-row content-around items-center'>
              <span>Inicio</span>
              <span>Séries</span>
              <span>Filmes</span>
              <span>Adicionados recentementes</span>
              <span>Minha Lista</span>
            </div>
          </div>
          <div className='right' >

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
