async function getTopAnimes(){
  let topAnimesList = [];

  const getList = await fetch('https://api.jikan.moe/v3/top/anime/1/airing', {
    method: 'GET',
  });

  const list = await getList.json();
  
  for (let index = 0; index < 8; index++){
    let animeID = list.top[index].mal_id;
    const getFiveAnimes = await fetch (`https://api.jikan.moe/v3/anime/${animeID}`, {
      method: 'GET',
    });

    const anime = await getFiveAnimes.json();
    topAnimesList.push(anime);
  }
  
  return topAnimesList;
}

module.exports = { getTopAnimes } 