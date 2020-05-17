<template>
  <v-form ref="formMatrix">
    <v-data-table
      :headers="headers"
      :items="matrix"
      :items-per-page="8"
      class="elevation-1"
      hide-default-footer=""
    >
      <template v-slot:item.idPlataforma="{ item }">
        <v-autocomplete
          v-model="item.idPlataforma"
          :items="platforms"
          item-key="idPlataforma"
          item-text="nombrePlataforma"
          outlined
          dense
          label="Plataforma"
          clearable=""
          required
          :rules="regex.selectRule"
        ></v-autocomplete>
      </template>
      <template v-slot:item.idsMedioComunicacion="{ item }">
        <v-autocomplete
          v-model="item.idsMedioComunicacion"
          :items="medias"
          item-key="idMedioComunicacion"
          item-text="nombreMedioComunicacion"
          outlined
          dense
          chips=""
          small-chips=""
          label="Medios de Comunicación"
          multiple=""
          clearable=""
          required
          :rules="regex.selectMulRule"
        ></v-autocomplete>
      </template>
      <template v-slot:item.idPorcentaje="{ item }">
        <v-autocomplete
          v-model="item.idPorcentaje"
          :items="percents"
          item-key="idPorcentaje"
          item-text="cantidad"
          outlined
          dense
          label="Porcentaje"
          clearable=""
          required
          :rules="regex.selectRule"
        ></v-autocomplete>
      </template>
    </v-data-table>
    <v-row>
      <v-btn
        block
        color="primary"
        dark
        @click.stop="sendForm"
      >Send</v-btn>
    </v-row>
  </v-form>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { getUserGroup } from '@/scripts/api/user-api'
import { getPlatform, getMedia, getPercent } from '@/scripts/api/catalogue-api'
import { headers } from '@/scripts/components/matrix-table'
import regex from '@/scripts/regex'
export default {
  data () {
    return {
      headers,
      platforms: [],
      medias: [],
      percents: [],
      regex
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
          this.mapToMatrix(data.entity.groups)
          return getPlatform()
        }).then(result => {
          const data = result.data
          this.message = data.message
          this.snack = true
          this.platforms = data.entity
          return getMedia()
        }).then(result => {
          const data = result.data
          this.message = data.message
          this.snack = true
          this.medias = data.entity
          return getPercent()
        }).then(result => {
          const data = result.data
          this.message = data.message
          this.snack = true
          this.percents = data.entity
        }).catch((err) => {
          console.error(err);
        }).finally(() => {
          this.loader = false
        })
    },
    mapToMatrix (groups) {
      this.matrix = groups.map(e => {
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
    },
    sendForm () {
      const validate = this.$refs.formMatrix.validate()
      if (!validate) return
      console.log(this.matrix)
    }
  },
}
</script>


<style lang="scss" scoped>
</style>