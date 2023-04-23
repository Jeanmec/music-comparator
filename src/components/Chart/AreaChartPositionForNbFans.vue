<template>
  <div id="chart">
    <apexcharts
      v-if="chartOptions.xaxis.categories.length > 0 && this.series[0].data.length > 0"
      height="350"
      ref="exampleChart"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
  <button @click="testo"></button>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
export default {
  components: {
    apexcharts: VueApexCharts
  },
  props: ['topChartArtist'],
  watch: {
    topChartArtist: {
      immediate: true,
      handler(newVal, oldVal) {
        console.log(newVal)
        let arrayCategories = []
        let arrayNb_fan = []
        for (let i = 0; i < newVal.length; i++) {
          const artist = newVal[i]
          arrayCategories.push('#' + artist.position + ' ' + artist.name)
          arrayNb_fan.push(artist.nb_fan)
        }

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

<style></style>
