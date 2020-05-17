<template>
  <v-data-table
    :headers="headers"
    :items="matrix"
    :items-per-page="8"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { getUserGroup } from '@/scripts/api/user-api'
import { headers } from '@/scripts/components/matrix-table'
export default {
  data () {
    return {
      headers
    }
  },
  computed: {
    ...mapFields(['profile', 'matrix', 'loader', 'snack', 'message'])
  },
  watch: {
    profile: {
      immediate: true,
      deep: true,
      handler (newValue) {
        if (newValue && newValue.applyQuiz)
          this.fillData()
      }
    }
  },
  methods: {
    fillData () {
      this.loader = true
      getUserGroup()
        .then((result) => {
          const data = result.data
          this.message = data.message
          this.snack = true
          this.matrix = data.entity.groups.map(e => {
            return {
              idGrupo: e.idGrupo,
              nivelSemestre: e.nivelSemestre,
              secuencia: e.secuencia,
              nombreUnidadAprendizaje: e.unidadAprendizaje.nombreUnidadAprendizaje,
              idPlataforma: 0,
              idsMedioComunicacion: [],
              idPorcentaje: 0
            }
          })
          console.log(JSON.parse(JSON.stringify(this.matrix)))
        }).catch((err) => {
          console.error(err);
        })
        .finally(() => {
          this.loader = false
        })

    }
  },
}
</script>


<style lang="scss" scoped>
</style>