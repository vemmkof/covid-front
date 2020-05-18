<template>
  <v-card>
    <v-card-text style="height: 100px; position: relative">
      <v-fab-transition>
        <v-btn
          absolute=""
          bottom=""
          right=""
          color="secondary"
          class="ma-2 white--text"
          fab
          @click.stop="logout"
        >
          <v-icon dark>mdi-account-arrow-left</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card-text>
  </v-card>
</template>

<script>
import { removeData } from '@/scripts/helper/cookie-helper.js'
export default {
  methods: {
    logout () {
      removeData()
      window.location.href = '/'
    }
  }
}
</script>

<style lang="sass" scoped>
</style>