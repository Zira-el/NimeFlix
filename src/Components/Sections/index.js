import React from 'react';
import './styles.css';
import Cards from '../Cards';

function Sections({sectionName, animes}) {
  return(
    <>
      <div className='flex-column section'>
        <h1>{sectionName}</h1>
        <Cards 
          animes = {animes}
        />
      </div>
    </>
  )
}

export default Sections;