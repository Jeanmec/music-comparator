<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <div class="container">
    <SearchBar @searchResult="toogleShowSearchResult" />

    <TheVersusSelection :searchedArtists="searchResult" @selectedArtist="toogleArtistSelection" />
    <TheVersusForm :searchedArtists="selectedArtist" />

    <div class="grid grid-cols-2">
      <div id="chart">
        <apexchart height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
      <TheMostPopularTrackOfAArtist />
    </div>
  </div>
  <TheFooter />
</template>

<script lang="ts">
import TheMostPopularTrackOfAArtist from './components/TheMostPopularTrackOfAArtist.vue'
import TheVersusSelection from './components/TheVersusSelection.vue'
import TheVersusForm from './components/TheVersusForm.vue'
import SearchBar from './components/SearchBar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    TheMostPopularTrackOfAArtist,
    TheVersusSelection,
    TheVersusForm,
    TheFooter,
    SearchBar
  },
  data: function () {
    return {
      searchResult: [],
      selectedArtist: [],
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
  methods: {
    toogleShowSearchResult(elements) {
      console.log(elements)
      this.searchResult = elements
    },
    toogleArtistSelection(elements) {
      console.log(elements)
      this.selectedArtist.push(elements)
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
