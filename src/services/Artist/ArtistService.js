import axios from 'axios'

// Retourne les informations de l'artiste
export async function getArtist(artistId) {
  return await axios.get('https://api.deezer.com/artist/' + artistId)
}

// Retourne les meilleurs son d'un artiste
export async function getArtistTopTracks(artistId) {
  return await axios.get('https://api.deezer.com/artist/' + artistId + '/top?limit=5')
}
