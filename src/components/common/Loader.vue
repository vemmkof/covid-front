<template>
  <div class="text-center">
    <v-btn
      :disabled="dialog"
      :loading="dialog"
      class="white--text"
      color="purple darken-2"
      @click="dialog = true"
    >
      Start loading
    </v-btn>
    <v-dialog
      v-model="loader"
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  data () {
    return {
      dialog: false,
    }
  },
  computed: {
    ...mapFields(['loader'])
  }
}
</script>

<style lang="scss" scoped>
</style>