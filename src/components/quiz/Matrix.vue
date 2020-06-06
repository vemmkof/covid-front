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
      <template v-slot:item.baja="{ item }">
        <v-row
          align="center"
          justify="center"
        >
          <v-checkbox
            v-model="item.baja"
            :label="item.baja ? 'Sí' : 'No'"
          ></v-checkbox>
        </v-row>
      </template>
      <template v-slot:item.motivo="{ item }">
        <v-text-field
          v-if="item.baja"
          v-model="item.motivo"
          label="Motivo(s) de baja"
          clearable
          required
          :rules="regex.reasonRule"
        ></v-text-field>
      </template>
    </v-data-table>
    <v-row v-if="showMatrix">
      <v-btn
        block
        color="primary"
        dark
        @click.stop="sendForm"
      >Envíar</v-btn>
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
          nombreUnidadAprendizaje: e.unidadAprendizaje.nombreUnidadAprendizaje
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
      console.log(JSON.parse(JSON.stringify(this.matrix)))
    }
  },
}
</script>


<style lang="scss" scoped>
</style>