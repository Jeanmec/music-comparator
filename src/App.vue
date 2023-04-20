<template>
  <header>
    <nav>
      <RouterLink to="/">Home <PlusCircleOutline /></RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <div id="chart">
    <apexchart height="350" width="50%" :options="chartOptions" :series="series"></apexchart>
  </div>
  <TheMostPopularTrackOfAArtist />
</template>

<script lang="ts">
import { PlusCircleOutline } from 'mdue'
import TheMostPopularTrackOfAArtist from './components/TheMostPopularTrackOfAArtist.vue'

export default {
  components: {
    PlusCircleOutline,
    TheMostPopularTrackOfAArtist
  },
  data: function () {
    return {
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
