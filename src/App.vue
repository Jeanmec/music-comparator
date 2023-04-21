<template>
  <header>
    <nav>
      <RouterLink to="/">Home <PlusCircleOutline /></RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <SearchBar @searchResult="toogleShowSearchResult" />

  Select your : type
  <div v-if="searchResult" class="flex flex-wrap justify-center gap-2 my-3 mx-20">
    <div v-for="(result, index) in searchResult" :key="result">
      <span
        class="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full bg-white text-gray-700 border cursor-pointer gap-3"
      >
        <img :src="result.pic" class="w-10 h-10 rounded-full" /> {{ result.name }}</span
      >
    </div>
  </div>

  <div class="grid grid-cols-2">
    <div id="chart">
      <apexchart height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
    <TheMostPopularTrackOfAArtist />
  </div>
  <TheFooter />
</template>

<script lang="ts">
import { PlusCircleOutline } from 'mdue'
import TheMostPopularTrackOfAArtist from './components/TheMostPopularTrackOfAArtist.vue'
import SearchBar from './components/SearchBar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    PlusCircleOutline,
    TheMostPopularTrackOfAArtist,
    TheFooter,
    SearchBar
  },
  data: function () {
    return {
      searchResult: [],
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
</style>
