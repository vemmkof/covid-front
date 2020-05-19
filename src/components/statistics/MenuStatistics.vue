<template>
  <v-expansion-panels
    accordion
    inset
    focusable
    flat
  >
    <v-expansion-panel>
      <v-expansion-panel-header class="title">Plataformas empleadas</v-expansion-panel-header>
      <v-expansion-panel-content>
        <platform-chart-vue />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header class="title">Medios de comunicación usados</v-expansion-panel-header>
      <v-expansion-panel-content>
        <media-chart-vue />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header class="title">Porcentajes cubiertos</v-expansion-panel-header>
      <v-expansion-panel-content>
        <percent-chart-vue />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import PlatformChartVue from './PlatformChart.vue'
import PercentChartVue from './PercentChart.vue'
import MediaChartVue from './MediaChart.vue'

export default {
  components: {
    MediaChartVue,
    PercentChartVue,
    PlatformChartVue
  },
}
</script>

<style lang="sass" scoped>
</style>