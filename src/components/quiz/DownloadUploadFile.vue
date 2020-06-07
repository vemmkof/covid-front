<template>
  <v-container v-if="showDUFile">
    <v-row
      align="center"
      justify="center"
      class="title"
    >
      Tu solicitud fue registrada, por favor continua con el proceso
    </v-row>
    <v-row>
      <v-btn
        block
        color="primary"
        dark
        @click.stop="download()"
      >Descargar comprobante (Imprimir y firmar)</v-btn>
    </v-row>
    <v-divider />
    <v-divider />
    <v-divider />
    <v-divider />
    <v-row>
      <v-btn
        block
        color="primary"
        dark
        @click.stop="upload"
      >Subir comprobante (Firmado)</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { getReport } from '@/scripts/api/report-api'
export default {
  data () {
    return {
      showDUFile: false
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
        if (newValue && !newValue.applyQuiz && !newValue.filePath) {
          this.showDUFile = true
        } else {
          this.showDUFile = false
        }
      }
    }
  },
  methods: {
    download () {
      getReport()
        .then((result) => {
          const data = result.data
          this.message = data.message
          this.snack = true
          // const entity = data.entity
          // base64
          // fileName
        }).catch(() => {

        });
    }
  },
}
</script>

<style lang="css" scoped>
</style>