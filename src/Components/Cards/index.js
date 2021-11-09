import React from 'react';
import './styles.css';

function Cards({topAnimes}){
  console.log(topAnimes);
  const styles = {backgroundImage: `url(${topAnimes[0].image_url})`}

  return(
    <>
    <div className='cardsContainer flex-row'>
      <div style={styles} className='cards'></div>  
      <div style={styles} className='cards'></div>  
      <div style={styles} className='cards'></div>  
      <div style={styles} className='cards'></div>  
    </div>
    </>
  )
}

export default Cards;