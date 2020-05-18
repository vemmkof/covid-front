<template>
  <v-form ref="formMatrix">
    <v-data-table
      :headers="headers"
      :items="matrix"
      :items-per-page="8"
      class="elevation-1"
      hide-default-footer=""
      v-if="showMatrix"
    >
      <template v-slot:item.idPlataforma="{ item }">
        <v-row class="ma-4">
          <v-autocomplete
            v-model="item.idPlataforma"
            :items="platforms"
            item-value="idPlataforma"
            item-key="idPlataforma"
            item-text="nombrePlataforma"
            outlined
            dense
            label="Plataforma"
            clearable=""
            required
            :rules="regex.selectRule"
          ></v-autocomplete>
        </v-row>
      </template>
      <template v-slot:item.idsMedioComunicacion="{ item }">
        <v-row class="ma-4">
          <v-flex xs11 offset-xs1 md12>
            <v-autocomplete
              v-model="item.idsMedioComunicacion"
              :items="medias"
              item-value="idMedioComunicacion"
              item-key="idMedioComunicacion"
              item-text="nombreMedioComunicacion"
              outlined
              dense
              chips=""
              small-chips=""
              label="Medios de comuniación"
              multiple=""
              clearable=""
              required
              :rules="regex.selectMulRule"
            ></v-autocomplete>
          </v-flex>
        </v-row>
      </template>
      <template v-slot:item.idPorcentaje="{ item }">
        <v-row class="ma-4">
          <v-autocomplete
            v-model="item.idPorcentaje"
            :items="percents"
            item-value="idPorcentaje"
            item-key="idPorcentaje"
            item-text="cantidad"
            outlined
            dense
            label="Porcentaje"
            clearable=""
            required
            :rules="regex.selectRule"
          ></v-autocomplete>
        </v-row>
      </template>
    </v-data-table>
    <v-row v-if="showMatrix">
      <v-btn
        block
        color="primary"
        dark
        @click.stop="sendForm"
      >Send</v-btn>
    </v-row>
    <v-row
      v-if="!showMatrix"
      align="center"
      justify="center"
      class="pa-6 title"
    >
      Tu respuesta fue recibida
    </v-row>
  </v-form>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { getUserGroup } from '@/scripts/api/user-api'
import { getPlatform, getMedia, getPercent } from '@/scripts/api/catalogue-api'
import { sendQuiz } from '@/scripts/api/quiz-api'
import { headers } from '@/scripts/components/matrix-table'
import regex from '@/scripts/regex'
export default {
  data () {
    return {
      headers,
      platforms: [],
      medias: [],
      percents: [],
      regex,
      showMatrix: true
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
        else
          this.showMatrix = false
      }
    }
  },
  methods: {
    fillData () {
      this.showMatrix = true
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
      sendQuiz(this.matrix)
        .then((result) => {
          const data = result.data
          this.snack = true
          this.message = data.message
          this.profile = data.entity
        }).catch((err) => {
          this.snack = true
          this.message = err
        }).finally(() => {
          this.loader = false
        })
      console.log(this.matrix)
    }
  },
}
</script>


<style lang="scss" scoped>
</style>