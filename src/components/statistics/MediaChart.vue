<template>
  <div>
    {{ mediaData }}
  </div>
</template>

<script>
import { getMediaStatistics } from '@/scripts/api/statistics-api'
import { mapFields } from 'vuex-map-fields'
export default {
  data () {
    return {
      mediaData: []
    }
  },
  computed: {
    ...mapFields(['loader', 'snack', 'message'])
  },
  created () {
    this.loadMediaStatistics();
  },
  methods: {
    loadMediaStatistics () {
      this.loader = true
      getMediaStatistics()
        .then((result) => {
          const data = result.data
          this.mediaData = this.mapData(data.entity)
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