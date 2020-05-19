<template>
  <v-content>
    <v-container fluid>
      <title-vue :title="'Home'" />
      <covid-legend-vue />
      <profile-vue />
      <logout-vue />
    </v-container>
  </v-content>
</template>

<script>
import TitleVue from '../components/Title.vue'
import CovidLegendVue from '../components/CovidLegend.vue'
import LogoutVue from '../components/Logout.vue'
import ProfileVue from '../components/Profile.vue'
export default {
  components: {
    TitleVue,
    CovidLegendVue,
    LogoutVue,
    ProfileVue
  }

}
</script>

<style lang="scss" scoped>
</style>