<template>
  <v-snackbar
    v-model="snack"
    :timeout="timeout"
  >
    {{ message }}
    <v-btn
      color="primary"
      text
      @click="snack = false"
    >
      Close
    </v-btn>
  </v-snackbar>

</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  data: () => ({
    timeout: 5000,
  }),
  computed: {
    ...mapFields(['snack', 'message'])
  },
}
</script>