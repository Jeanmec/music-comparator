<template>
  <div id="chart">
    <apexchart height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  props: ['searchedArtists'],
  watch: {
    searchedArtists: {
      immediate: true,
      handler(newVal, oldVal) {
        console.log(newVal)

        // let data = []
        // // let maxFans = 0
        // for (let i = 0; i < newVal.length; i++) {
        //   const artist = newVal[i]
        //   data.push({ x: album.title, y: album.fans })
        // }
        // this.series[0].data = data
        // this.chartOptions.plotOptions.treemap.colorScale.ranges[0].to = Math.ceil(maxFans / 2)
        // this.chartOptions.plotOptions.treemap.colorScale.ranges[1].from = Math.ceil(maxFans / 2)
        // this.chartOptions.plotOptions.treemap.colorScale.ranges[1].to = maxFans
      }
    }
  },
  data: function () {
    return {
      artist: [],
      series: [
        {
          data: [23333, 150000]
        }
      ],
      chartOptions: {
        chart: {
          type: 'bar'
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toLocaleString() + ' fans'
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758']
          }
        },

        xaxis: {
          categories: ['Eminem', '50cent'],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + '%'
            }
          }
        },
        title: {
          text: 'Monthly Inflation in Argentina, 2002',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      }
    }
  }
}
</script>

<style></style>
