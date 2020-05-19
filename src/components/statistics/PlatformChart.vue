<template>
  <div>
    {{ platformData }}
  </div>
</template>

<script>
import { getPlatformStatistics } from '@/scripts/api/statistics-api'
import { mapFields } from 'vuex-map-fields'
export default {
  data () {
    return {
      platformData: []
    }
  },
  computed: {
    ...mapFields(['loader', 'snack', 'message'])
  },
  created () {
    this.loadPlatformStatistics();
  },
  methods: {
    loadPlatformStatistics () {
      this.loader = true
      getPlatformStatistics()
        .then((result) => {
          const data = result.data
          this.platformData = this.mapData(data.entity)
          this.snack = true
          this.message = data.message
        }).catch((err) => {
          this.snack = true
          this.message = err
        }).finally(() => {
          this.loader = false
        })
    },
    mapData (data) {
      return data
    }
  },
}
</script>

<style lang="sass" scoped>
</style>