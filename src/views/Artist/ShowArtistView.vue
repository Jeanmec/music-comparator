<script>
import ArtistPresentation from '../../components/Artist/ArtistPresentation.vue'
import ArtistPopularTracks from '../../components/Artist/ArtistPopularTracks.vue'
import ArtistAlbums from '../../components/Artist/ArtistAlbums.vue'
import TreemapAlbumsFans from '../../components/Chart/TreemapAlbumsFans.vue'
import {
  getArtist,
  getArtistTopTracks,
  getArtistAlbums
} from '../../services/Artist/ArtistService.js'

export default {
  components: { ArtistPresentation, ArtistPopularTracks, ArtistAlbums, TreemapAlbumsFans },
  data: () => {
    return {
      artist: {},
      albums_pagination_index: 0
    }
  },
  methods: {
    // Va chercher de nouveaux album avec la pagination
    async handleFetchMoreAlbums() {
      this.albums_pagination_index += 5
      let albums = await getArtistAlbums(this.artist.id, this.albums_pagination_index)

      this.artist.albums = [...this.artist.albums, ...albums]
    }
  },

  async mounted() {
    // Récupère les info de l'artiste
    this.artist = await getArtist(this.$route.params.id)

    // L'ariste est introuvable
    if (this.artist.error) this.$router.push('/')

    // Meilleur son de l'artiste
    this.artist.top_tracks = await getArtistTopTracks(this.artist.id)
    // Albums de l'artiste (pagination)
    this.artist.albums = await getArtistAlbums(this.artist.id, this.albums_pagination_index)

    console.log(this.artist)
  }
}
</script>

<template>
  <div class="flex flex-col my-5 gap-10 w-3/6">
    <ArtistPresentation v-if="artist" :artist="artist" />

    <ArtistPopularTracks v-if="artist.top_tracks" :tracks="artist.top_tracks" />

    <ArtistAlbums
      v-if="artist.albums"
      :artist="artist"
      @fetch-more-albums-event="handleFetchMoreAlbums"
    />

    <TreemapAlbumsFans v-if="artist.albums" :albums="artist.albums" />
  </div>
</template>
