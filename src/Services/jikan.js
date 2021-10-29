async function getTopAnimes(){
  const response = await fetch('https://api.jikan.moe/v3/top/anime/1/airing', {
    method: 'GET',
  });

  const data = response.json();
  return data;
}

module.exports = { getTopAnimes } 