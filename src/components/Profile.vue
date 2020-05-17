<template>
  <v-card
    class="mx-auto"
    max-width="100%"
    shaped=""
  >
    <v-card-text>
      <v-row>
        <v-flex class="subtitle-1">
          <strong>Boleta:</strong> {{ profile.plate }}
        </v-flex>
        <v-flex class="subtitle-1">
          <strong>Nombre:</strong> {{ profile.fullName }}
        </v-flex>
        <v-flex class="subtitle-1">
          <strong>Email:</strong> {{ profile.email }}
        </v-flex>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { getUser } from '@/scripts/api/user-api'
export default {
  mounted () {
    this.loader = true
    getUser()
      .then((result) => {
        this.profile = result.data.entity
        this.message = result.data.message
        this.snack = true
      }).catch((err) => {
        this.message = err
        this.snack = true
      })
      .finally(() => {
        this.loader = false
      })
  },
  computed: {
    ...mapFields(['loader', 'snack', 'message', 'profile'])
  },
}
</script>

<style lang="sass" scoped>
</style>