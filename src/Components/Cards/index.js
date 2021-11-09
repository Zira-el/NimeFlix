import React from 'react';
import './styles.css';

function Cards({animes}){
  console.log(animes);

  return(
    <>
      <div className='flex-row container-geral'>
        {animes.map((anime, index) => (
          <div className='cardsContainer'>
            <div style={{backgroundImage: `url(${anime.image_url})`}} className='cards'></div>
            {console.log(anime.image_url)}
          </div>
        ))}
        
      </div>
    </>
  )
}

export default Cards;