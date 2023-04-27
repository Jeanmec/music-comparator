<template>
  <div id="chart">
    <apexcharts
      ref="barNumberOfFans"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
export default {
  props: ['searchedArtists'],
  components: {
    apexcharts: VueApexCharts
  },
  watch: {
    searchedArtists: {
      immediate: true,
      deep: true,

      handler(newVal, oldVal) {
        let data = []
        let artists = []
        // Loop through the array of searched artists and push their number of fans and name to data and artists arrays
        for (let i = 0; i < newVal.length; i++) {
          const artist = newVal[i].data
          data.push(artist.nb_fan)
          artists.push(artist.name)
        }

        // update the chart series data and x-axis categories
        this.series[0].data = data
      }
    }
  },
  data: function () {
    return {
      toto: [],
      artist: [],
      series: [{}],
      chartOptions: {
        chart: {
          type: 'bar',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },

        plotOptions: {
          bar: {
            borderRadius: 5,
            dataLabels: {
              position: 'top'
            }
          }
        },
        fill: {
          colors: ['#34d399']
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toLocaleString() + ' fans'
          },

          offsetY: 5,
          style: {
            fontSize: '18px',
            colors: ['#10b981']
          },
          background: {
            enabled: true,
            foreColor: '#fff',
            borderWidth: 0
          }
        },

        xaxis: {
          labels: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        }
      }
    }
  }
}
</script>
