<template>
  <v-content>
    <v-container fluid>
      <v-app-bar
        dark
        color="primary"
      >
        <v-spacer></v-spacer>
        <v-toolbar-title>
          Encuesta
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
    </v-container>
  </v-content>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  mounted () {
    // this.loader = true;
    this.snack = true
  },
  computed: {
    ...mapFields(['loader', 'snack'])
  },
}
</script>

<style lang="sass" scoped>
</style>