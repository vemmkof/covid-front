<template>
  <div>
    {{ percentData }}
  </div>
</template>

<script>
import { getPercentStatistics } from '@/scripts/api/statistics-api'
import { mapFields } from 'vuex-map-fields'
export default {
  data () {
    return {
      percentData: []
    }
  },
  computed: {
    ...mapFields(['loader', 'snack', 'message'])
  },
  created () {
    this.loadPercentStatistics();
  },
  methods: {
    loadPercentStatistics () {
      this.loader = true
      getPercentStatistics()
        .then((result) => {
          const data = result.data
          this.percentData = this.mapData(data.entity)
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