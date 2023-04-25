<script>
import ArtistPresentation from '../../components/Artist/ArtistPresentation.vue'
import ArtistPopularSong from '../../components/Artist/ArtistPopularSong.vue'
import { getArtist, getArtistTopSongs } from '../../services/Artist/ArtistService.js'
// import TheMostPopularTrackOfAArtist from '../../components/Artist/TheMostPopularTrackOfAArtist.vue'
// import TreemapAlbumsFans from '../../components/Chart/TreemapAlbumsFans.vue'

export default {
  components: { ArtistPresentation, ArtistPopularSong },
  data: () => {
    return {
      artist: {}
    }
  },
  methods: {},

  async mounted() {
    // Récupère les info de l'artiste
    this.artist = await getArtist(this.$route.params.id)

    // L'ariste est introuvable
    if (this.artist.error) this.$router.push('/')

    // Meilleur son de l'artiste
    this.artist.top_songs = await getArtistTopSongs(this.artist.id)

    console.log(this.artist)
  }

  // components: {
  //   ArtistPresentation,
  //   TheMostPopularTrackOfAArtist,
  //   TreemapAlbumsFans
  // }
  // data: function () {
  //   return { artistTopTracks: [], artistData: [], albumsData: [] }
  // },
  // async mounted() {
  //   const artistTopTracks = await this.getArtistTopTracks(this.$route.params.id)
  //   this.artistTopTracks = artistTopTracks.data.data
  //   const artistData = await this.getArtistData(this.$route.params.id)
  //   this.artistData = artistData.data
  //   const albumsData = await this.getAlbumsData(this.$route.params.id)
  //   this.albumsData = albumsData.data.data
  // },
  // methods: {
  //   async getArtistTopTracks(artistId) {
  //     return await axios.get('https://api.deezer.com/artist/' + artistId + '/top?limit=5')
  //   },
  //   async getArtistData(artistId) {
  //     return await axios.get('https://api.deezer.com/artist/' + artistId)
  //   },
  //   async getAlbumsData(artistId) {
  //     return await axios.get('https://api.deezer.com/artist/' + artistId + '/albums')
  //   }
  // }
}
</script>

<template>
  <div class="flex flex-col my-5 gap-10 w-1/3">
    <ArtistPresentation :artist="artist" />

    <ArtistPopularSong :songs="artist.top_songs" />
    <!-- <div class="grid"> -->
    <!-- <ArtistPresentation :artistData="artistData" /> -->
    <!-- <TheMostPopularTrackOfAArtist :artistTopTracks="artistTopTracks" /> -->
    <!-- </div> -->
    <!-- <TreemapAlbumsFans v-if="albumsData" :albumsData="albumsData" /> -->
  </div>
</template>
