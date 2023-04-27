<template>
  <div class="container">
    <project-introduction />

    <div class="grid">
      <AreaChartPositionForNbFans :topChartArtist="topChartArtist" />
    </div>

    <SearchBar @searchArtist="searchArtist" :error="searchError" id="search-bar" />

    <TheVersusSelection :searchedArtists="searchResult" @selectedArtist="toggleArtistSelection" />

    <TheVersusForm v-if="selectedArtistsData && selectedArtistsData.length > 0">
      <template v-slot:presentation>
        <VersusPresentation :searchedArtists="selectedArtistsData" />
      </template>

      <template v-slot:number-albums>
        <NumberAlbums :searchedArtists="selectedArtistsData" />
      </template>

      <template v-slot:albums-preview>
        <AlbumsPreview :searchedArtists="selectedArtistsData" />
      </template>

      <template v-slot:radio-presence>
        <RadioPresence :searchedArtists="selectedArtistsData" />
      </template>

      <template v-slot:chart-fans>
        <InflationNumberOfFans :searchedArtists="selectedArtistsData" />
      </template>
    </TheVersusForm>
  </div>
</template>

<script>
import axios from 'axios'
import TheVersusSelection from '../components/TheVersusSelection.vue'
import TheVersusForm from '../components/TheVersusForm.vue'
import SearchBar from '../components/SearchBar.vue'
import ProjectIntroduction from '../components/Home/ProjectIntroduction.vue'
import AreaChartPositionForNbFans from '../components/Chart/AreaChartPositionForNbFans.vue'
import NumberAlbums from '../components/Versus/NumberAlbums.vue'
import VersusPresentation from '../components/Versus/VersusPresentation.vue'
import AlbumsPreview from '../components/AlbumsPreview.vue'
import RadioPresence from '../components/Versus/RadioPresence.vue'
import InflationNumberOfFans from '../components/Chart/BarNumberOfFans.vue'

import {
  getTopChartArtists,
  getArtist,
  getArtistAlbums,
  searchArtist
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
    InflationNumberOfFans
  },
  data: function () {
    return {
      selectedArtistsData: [],
      topChartArtist: [],
      searchResult: [],
      artistToCompare: false,
      searchError: ''
    }
  },
  async mounted() {
    await this.getTopChartArtistsData()
    await this.selectRandomlyArtist()
  },

  methods: {
    async selectRandomlyArtist() {
      let selectedArtistsData = []
      for (let i = 0; i < 2; i++) {
        let artistData = await getArtist(this.randomIntFromInterval(1, 50))
        artistData.albums = await getArtistAlbums(artistData.id, 0)
        selectedArtistsData.push(artistData)
      }
      this.selectedArtistsData = selectedArtistsData
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    async toggleArtistSelection(artist) {
      this.searchResult = []
      let artistAlbums = await getArtistAlbums(artist.id, 0)
      artist.albums = artistAlbums
      if (this.selectedArtistsData.length == 2) {
        if (!this.artistToCompare) {
          this.selectedArtistsData[0] = artist
        } else {
          this.selectedArtistsData[1] = artist
        }
        this.artistToCompare = !this.artistToCompare
      } else {
        this.selectedArtistsData.push(artist)
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
    },
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
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
}
</style>
