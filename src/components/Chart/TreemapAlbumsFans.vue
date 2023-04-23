<template>
  <div id="chart">
    <apexchart
      height="350"
      :options="chartOptions"
      :series="series"
      v-if="chartOptions.plotOptions.treemap.colorScale.ranges[1].to"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ['albumsData'],
  watch: {
    albumsData: {
      immediate: true,
      handler(newVal, oldVal) {
        let data = []
        let maxFans = 0
        for (let i = 0; i < newVal.length; i++) {
          const album = newVal[i]
          if (album.fans > maxFans) {
            maxFans = album.fans
          }
          data.push({ x: album.title, y: album.fans })
        }
        this.series[0].data = data
        this.chartOptions.plotOptions.treemap.colorScale.ranges[0].to = Math.ceil(maxFans / 2)
        this.chartOptions.plotOptions.treemap.colorScale.ranges[1].from = Math.ceil(maxFans / 2)
        this.chartOptions.plotOptions.treemap.colorScale.ranges[1].to = maxFans
      }
    }
  },
  data: function () {
    return {
      artist: [],
      chart: {
        type: 'area'
      },
      series: [
        {
          data: []
        }
      ],
      chartOptions: {
        chart: {
          type: 'treemap'
        },
        title: {
          text: 'Popularity per album (number of fans)',
          align: 'center'
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          treemap: {
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            colorScale: {
              ranges: [
                {
                  from: 0,
                  color: '#e11d48'
                },
                {
                  color: '#22c55e'
                }
              ]
            }
          }
        }
      }
    }
  }
}
</script>

<style></style>
