<template>
  <v-content>
    <v-container fluid>
      <title-vue :title="'Gráficas'" />
      <menu-statistics-vue />
      <logout-vue />
    </v-container>
  </v-content>
</template>

<script>
import TitleVue from '../components/Title.vue'
import LogoutVue from '../components/Logout.vue'
import MenuStatisticsVue from '../components/statistics/MenuStatistics.vue'
export default {
  components: {
    TitleVue,
    LogoutVue,
    MenuStatisticsVue
  }

}
</script>

<style lang="scss" scoped>
</style>