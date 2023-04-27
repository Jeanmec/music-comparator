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
  props: ['albums'],
  watch: {
    albums: {
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
        // Update the chart series with the new data
        this.series[0].data = data
        // Update the color scale ranges to match the new data
        //This will display albums that had low popularity (based on the number of fans) (less than half of the number of fans of their top album) in red.
        this.chartOptions.plotOptions.treemap.colorScale.ranges[0].to = Math.ceil(maxFans / 2)
        this.chartOptions.plotOptions.treemap.colorScale.ranges[1].from = Math.ceil(maxFans / 2)
        this.chartOptions.plotOptions.treemap.colorScale.ranges[1].to = maxFans
      }
    }
  },
  data: () => {
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
          text: 'Popularity of albums based on the number of fans',
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
