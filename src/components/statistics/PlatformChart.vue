<template>
  <div
    class="chart ma-4"
    ref="chartdiv"
  />
</template>

<script>
import { getPlatformStatistics } from '@/scripts/api/statistics-api'
import { mapFields } from 'vuex-map-fields'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
export default {
  data () {
    return {
      platformData: []
    }
  },
  computed: {
    ...mapFields(['loader', 'snack', 'message'])
  },
  created () {
    this.loadPlatformStatistics();
  },
  beforeDestroy () {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  methods: {
    loadPlatformStatistics () {
      this.loader = true
      getPlatformStatistics()
        .then((result) => {
          const data = result.data
          this.platformData = this.mapData(data.entity)
          this.snack = true
          this.message = data.message
          this.createChart()
        }).catch((err) => {
          this.snack = true
          this.message = err
        }).finally(() => {
          this.loader = false
        })
    },
    mapData (data) {
      return data
    },
    createChart () {
      var chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
      const resume = this.platformData.map(e => e.plataforma.nombrePlataforma)
      const keys = [...new Set(resume)]
      // Add data
      chart.data = keys.map(k => {
        return {
          category: k,
          value: resume.filter(e => e === k).length
        }
      })
      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "category";
      // Create value axis
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      // Configure grid
      valueAxis.renderer.grid.template.strokeOpacity = 1;
      valueAxis.renderer.grid.template.stroke = am4core.color("#1169A3");
      valueAxis.renderer.grid.template.strokeWidth = 2;
      // Configure labels
      valueAxis.renderer.labels.template.fill = am4core.color("#1169A3");
      valueAxis.renderer.labels.template.fontSize = 20;
      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "value";
      series.dataFields.categoryX = "category";
      series.name = "Sales";
      // create chart into instance
      this.chart = chart;
    }
  },
}
</script>

<style lang="sass" scoped>
</style>