import axios from 'axios'

// Retourne les informations de l'artiste
export async function getArtist(artistId) {
  let response = await axios.get(import.meta.env.VITE_API_URL + '/artist/' + artistId)
  return response.data
}

// Retourne les meilleurs son d'un artiste
export async function getArtistTopTracks(artistId) {
  let response = await axios.get(import.meta.env.VITE_API_URL + '/artist/' + artistId + '/top')
  return response.data.data
}

// Retourne les albums d'un artiste
export async function getArtistAlbums(artistId, index) {
  let response = await axios.get(
    import.meta.env.VITE_API_URL + '/artist/' + artistId + '/albums?index=' + index
  )
  return response.data.data
}
