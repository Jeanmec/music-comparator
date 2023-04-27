<template>
  <div class="w-4/5">
    <ProjectIntroduction />

    <AreaChartPositionForNbFans :topChartArtist="topChartArtist" />

    <SearchBar @searchArtist="searchArtist" :error="searchError" id="search-bar" />

    <TheVersusSelection :searchedArtists="searchResult" @selectedArtist="toggleArtistSelection" />

    <TheVersusForm v-if="selectedArtists && selectedArtists[0].data && selectedArtists[1].data">
      <template v-slot:presentation>
        <VersusPresentation :searchedArtists="selectedArtists" />
      </template>

      <template v-slot:number-albums>
        <NumberAlbums :searchedArtists="selectedArtists" />
      </template>

      <template v-slot:albums-preview>
        <AlbumsPreview :searchedArtists="selectedArtists" />
      </template>

      <template v-slot:radio-presence>
        <RadioPresence :searchedArtists="selectedArtists" />
      </template>

      <template v-slot:chart-fans>
        <BarNumberOfFans :searchedArtists="selectedArtists" />
      </template>

      <template v-slot:tracks-preview>
        <ArtistPopularTracksPreview
          class="w-6/12 float-left"
          v-for="(artist, index) in selectedArtists"
          :key="index"
          :artist="artist"
        />
      </template>
    </TheVersusForm>
  </div>
</template>

<script>
import TheVersusSelection from '../components/Versus/TheVersusSelection.vue'
import TheVersusForm from '../components/Versus/TheVersusForm.vue'
import SearchBar from '../components/SearchBar.vue'
import ProjectIntroduction from '../components/Home/ProjectIntroduction.vue'
import AreaChartPositionForNbFans from '../components/Chart/AreaChartPositionForNbFans.vue'
import NumberAlbums from '../components/Versus/NumberAlbums.vue'
import VersusPresentation from '../components/Versus/VersusPresentation.vue'
import AlbumsPreview from '../components/Artist/AlbumsPreview.vue'
import RadioPresence from '../components/Versus/RadioPresence.vue'
import BarNumberOfFans from '../components/Chart/BarNumberOfFans.vue'
import ArtistPopularTracksPreview from '../components/Artist/ArtistPopularTracksPreview.vue'

import {
  getTopChartArtists,
  getArtist,
  getArtistAlbums,
  searchArtist,
  getArtistTopTracks
} from '../services/Artist/ArtistService.js'

export default {
  components: {
    TheVersusSelection,
    TheVersusForm,
    ProjectIntroduction,
    AreaChartPositionForNbFans,
    SearchBar,
    NumberAlbums,
    VersusPresentation,
    AlbumsPreview,
    RadioPresence,
    BarNumberOfFans,
    ArtistPopularTracksPreview
  },
  data: function () {
    return {
      topChartArtist: [],
      selectedArtists: [{}, {}],
      searchResult: [],
      artistToCompare: false,
      searchError: ''
    }
  },
  async mounted() {
    await this.getTopChartArtistsData()
    await this.selectRandomArtists()
  },

  methods: {
    async getTopChartArtistsData() {
      const topChartArtists = await getTopChartArtists()

      if (topChartArtists.length > 0) {
        let artistsData = []
        for (let i = 0; i < topChartArtists.length; i++) {
          const artist = topChartArtists[i]
          const artistData = await getArtist(artist.id)
          artistData.position = artist.position
          artistsData.push(artistData)
        }
        this.topChartArtist = artistsData
      }
    },
    async selectRandomArtists() {
      for (let i = 0; i < 2; i++) {
        let randomId = this.randomIntFromInterval(1, 50)
        this.selectedArtists[i].albums = await getArtistAlbums(randomId, 0)
        this.selectedArtists[i].data = await getArtist(randomId)
        this.selectedArtists[i].tracks = await getArtistTopTracks(randomId)
      }
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    async toggleArtistSelection(artist) {
      this.searchResult = []
      let artistAlbums = await getArtistAlbums(artist.id, 0)
      let artistTopTracks = await getArtistTopTracks(artist.id)

      if (this.selectedArtists.length === 2) {
        const artistToReplace = this.artistToCompare ? 1 : 0
        this.selectedArtists[artistToReplace].data = artist
        this.selectedArtists[artistToReplace].albums = artistAlbums
        this.selectedArtists[artistToReplace].tracks = artistTopTracks
        this.artistToCompare = !this.artistToCompare
      }
    },
    async searchArtist(query) {
      this.searchError = ''
      let searchResult = await searchArtist(query)
      if (searchResult.length > 0) {
        this.searchResult = await searchArtist(query)
      } else {
        this.searchError = 'No results for the search : ' + query
      }
    }
  }
}
</script>
