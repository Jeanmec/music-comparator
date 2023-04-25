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
      artist: {
        id: 13,
        name: 'Eminem',
        link: 'https:\/\/www.deezer.com\/artist\/13',
        share:
          'https:\/\/www.deezer.com\/artist\/13?utm_source=deezer&utm_content=artist-13&utm_term=0_1682437888&utm_medium=web',
        picture: 'https:\/\/api.deezer.com\/artist\/13\/image',
        picture_small:
          'https:\/\/e-cdns-images.dzcdn.net\/images\/artist\/19cc38f9d69b352f718782e7a22f9c32\/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https:\/\/e-cdns-images.dzcdn.net\/images\/artist\/19cc38f9d69b352f718782e7a22f9c32\/250x250-000000-80-0-0.jpg',
        picture_big:
          'https:\/\/e-cdns-images.dzcdn.net\/images\/artist\/19cc38f9d69b352f718782e7a22f9c32\/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https:\/\/e-cdns-images.dzcdn.net\/images\/artist\/19cc38f9d69b352f718782e7a22f9c32\/1000x1000-000000-80-0-0.jpg',
        nb_album: 58,
        nb_fan: 16244967,
        radio: true,
        tracklist: 'https:\/\/api.deezer.com\/artist\/13\/top?limit=50',
        type: 'artist'
      }
    }
  },
  methods: {},

  async mounted() {
    this.artist = await getArtist(this.$route.params.id)
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

    <!-- <div class="grid"> -->
    <!-- <ArtistPresentation :artistData="artistData" /> -->
    <!-- <TheMostPopularTrackOfAArtist :artistTopTracks="artistTopTracks" /> -->
    <!-- </div> -->
    <!-- <TreemapAlbumsFans v-if="albumsData" :albumsData="albumsData" /> -->
  </div>
</template>
