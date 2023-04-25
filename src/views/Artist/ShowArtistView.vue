<script>
import ArtistPresentation from '../../components/Artist/ArtistPresentation.vue'
import { getArtist } from '../../services/Artist/ArtistService.js'

// import TheMostPopularTrackOfAArtist from '../../components/Artist/TheMostPopularTrackOfAArtist.vue'
// import TreemapAlbumsFans from '../../components/Chart/TreemapAlbumsFans.vue'

//todo if artist id is incorrect
export default {
  components: { ArtistPresentation },
  data: () => {
    return {
      artist: {}
    }
  },
  methods: {},

  async mounted() {
    this.artist = await getArtist(this.$route.params.id)

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
  <div class="flex flex-col my-5">
    <ArtistPresentation :artist="artist" />

    <p></p>
    <!-- <div class="grid"> -->
    <!-- <ArtistPresentation :artistData="artistData" /> -->
    <!-- <TheMostPopularTrackOfAArtist :artistTopTracks="artistTopTracks" /> -->
    <!-- </div> -->
    <!-- <TreemapAlbumsFans v-if="albumsData" :albumsData="albumsData" /> -->
  </div>
</template>
