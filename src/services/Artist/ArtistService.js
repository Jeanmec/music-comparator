import axios from 'axios'

// Retourne les informations de l'artiste
export async function getArtist(artistId) {
  let response = await axios.get(import.meta.env.VITE_API_URL + '/artist/' + artistId)
  return response.data
}

// Retourne les meilleurs son d'un artiste
// export async function getArtistTopTracks(artistId) {
//   return await axios.get('https://api.deezer.com/artist/' + artistId + '/top?limit=5')
// }
