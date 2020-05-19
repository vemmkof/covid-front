<template>
  <v-app-bar
    app
    clipped-left
  >
    <v-app-bar-nav-icon @click="drawer = true" />
    <v-img
      class="mx-2"
      src="@/assets/logo_escom.png"
      max-width="4rem"
      contain
    />
    <v-spacer></v-spacer>
    <v-toolbar-title>
      Seguimiento de Actividades Académicas a Distancia
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-img
      class="mx-2"
      src="@/assets/logo_ipn.png"
      max-width="5rem"
      contain
    />
  </v-app-bar>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  computed: {
    ...mapFields(['drawer'])
  },
}
</script>

<style lang="scss" scoped>
</style>