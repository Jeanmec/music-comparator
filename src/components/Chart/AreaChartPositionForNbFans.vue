<template>
  <div id="chart">
    <!-- apexcharts component to display the chart -->
    <apexcharts
      v-if="chartOptions.xaxis.categories.length > 0 && this.series[0].data.length > 0"
      height="350"
      ref="exampleChart"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
export default {
  components: {
    apexcharts: VueApexCharts
  },
  props: ['topChartArtist'],
  watch: {
    // watch for changes in topChartArtist prop and update the chart
    topChartArtist: {
      immediate: true, // runs handler immediately when component is mounted
      handler(newVal, oldVal) {
        let arrayCategories = []
        let arrayNb_fan = []
        for (let i = 0; i < newVal.length; i++) {
          const artist = newVal[i]
          // add artist name and position to categories array
          arrayCategories.push('#' + artist.position + ' ' + artist.name)
          // add artist fan count to data array
          arrayNb_fan.push(artist.nb_fan)
        }
        
        // update the chart series data and x-axis categories
        this.series[0].data = arrayNb_fan
        this.chartOptions.xaxis.categories = arrayCategories
      }
    }
  },
  data: function () {
    return {
      artist: [],
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
          name: 'Fans',
          data: []
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
          categories: []
        }
      }
    }
  }
}
</script>
