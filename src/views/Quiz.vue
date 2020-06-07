<template>
  <v-content>
    <v-container fluid>
      <title-vue :title="'Encuesta'" />
      <covid-legend-vue />
      <profile-vue />
      <matrix-vue />
      <download-upload-file-vue />
      <logout-vue />
    </v-container>
  </v-content>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import TitleVue from '../components/Title.vue'
import CovidLegendVue from '../components/CovidLegend.vue'
import ProfileVue from '../components/Profile.vue'
import MatrixVue from '../components/quiz/Matrix.vue'
import LogoutVue from '../components/Logout.vue'
import DownloadUploadFileVue from '../components/quiz/DownloadUploadFile.vue'
export default {
  components: {
    TitleVue,
    CovidLegendVue,
    ProfileVue,
    MatrixVue,
    LogoutVue,
    DownloadUploadFileVue
  },
  mounted () {
    // this.loader = true;
    // this.snack = true
  },
  computed: {
    ...mapFields(['loader', 'snack'])
  },
}
</script>

<style lang="sass" scoped>
</style>