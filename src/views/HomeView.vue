<template>
  <div class="container">
    <project-introduction />

    <div class="grid">
      <AreaChartPositionForNbFans :topChartArtist="topChartArtist" />
    </div>

    <SearchBar @searchArtist="searchArtist" id="search-bar" />

    <TheVersusSelection :searchedArtists="searchResult" @selectedArtist="toogleArtistSelection" />

    <TheVersusForm>
      <template v-slot:presentation>
        <VersusPresentation :searchedArtists="selectedArtist" />
      </template>

      <template v-slot:number-albums>
        <NumberAlbums :searchedArtists="selectedArtist" />
      </template>

      <template v-slot:albums-preview>
        <AlbumsPreview :albumsOfSelectedArtist="albumsOfSelectedArtist" />
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

export default {
  components: {
    TheVersusSelection,
    TheVersusForm,
    ProjectIntroduction,
    AreaChartPositionForNbFans,
    SearchBar,
    NumberAlbums,
    VersusPresentation,
    AlbumsPreview
  },
  data: function () {
    return {
      searchResult: [],
      selectedArtist: [],
      topChartArtist: [],
      albumsOfSelectedArtist: [],
      chart: {
        type: 'area'
      },
      stroke: {
        show: true,
        width: 4,
        colors: ['#2f4cdd', '#b519ec']
      },
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: 'series3',
          data: [15, 32, 48, 3, 14, 32, 71]
        }
      ],
      chartOptions: {
        colors: ['#9DF3C4', '#62D2A2', '#1FAB89'],
        chart: {
          height: 350,
          type: 'area',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: '',
          align: 'left'
        },

        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
      }
    }
  },
  async mounted() {
    await this.getTopChartArtists()
    this.selectedArtist[0] = (await this.getArtistData(this.randomIntFromInterval(1, 150))).data
    this.selectedArtist[1] = (await this.getArtistData(this.randomIntFromInterval(1, 150))).data

    this.albumsOfSelectedArtist[0] = (
      await this.getAlbumsOfArtist(this.selectedArtist[0].id)
    ).data.data
    this.albumsOfSelectedArtist[1] = (
      await this.getAlbumsOfArtist(this.selectedArtist[1].id)
    ).data.data
  },

  methods: {
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    toogleArtistSelection(elements) {
      this.searchResult = []
      if (this.selectedArtist.length == 2) {
        this.selectedArtist[0] = elements
      } else {
        this.selectedArtist.push(elements)
      }
    },
    async searchArtist(query) {
      const res = await axios.get('https://api.deezer.com/search/artist?q=' + query)
      if (res.data.data.length > 0) {
        for (let i = 0; i < res.data.data.length; i++) {
          const element = res.data.data[i]
          this.searchResult.push(element)
        }
      }
    },
    async getTopChartArtists() {
      const res = await axios.get('https://api.deezer.com/chart/0/artists')
      if (res.data.data.length > 0) {
        let topChartArtist = []
        for (let i = 0; i < res.data.data.length; i++) {
          const artist = res.data.data[i]
          const artistData = await this.getArtistData(artist.id)
          artistData.data.position = artist.position
          topChartArtist.push(artistData.data)
        }
        this.topChartArtist = topChartArtist
      }
    },
    async getArtistData(artistId) {
      return await axios.get('https://api.deezer.com/artist/' + artistId)
    },
    async getAlbumsOfArtist(artistId) {
      return await axios.get('https://api.deezer.com/artist/' + artistId + '/albums')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  align-self: center;
  nav {
    display: flex;
    align-self: center;
    column-gap: 15px;
  }
}
.container {
  width: 80%;
}
</style>
