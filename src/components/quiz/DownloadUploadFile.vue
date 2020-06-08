<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      class="title"
    >
      {{ showDUFile ? 'Tu solicitud fue registrada, por favor continua con el proceso': 'Tu solicitud fue recibida.' }}
    </v-row>
    <v-row v-if="showDUFile">
      <v-btn
        block
        color="primary"
        dark
        @click.stop="download()"
      >Descargar comprobante (Imprimir y firmar)</v-btn>
    </v-row>
    <v-form
      ref="formUpload"
      v-if="showDUFile"
    >
      <v-row class="mt-4">
        <v-flex>
          <v-file-input
            accept="application/pdf,image/*"
            label="Comprobante"
            :rules="regex.fileRule"
            v-model="file"
          ></v-file-input>
        </v-flex>
        <v-flex>
          <v-btn
            color="primary"
            dark
            @click.stop="upload"
          >Subir comprobante (Firmado)</v-btn>
        </v-flex>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import {  convertToBase64,
  downloadFromBase64} from '@/scripts/actions/file64'
import { getReport, saveReport } from '@/scripts/api/report-api'
import regex from '@/scripts/regex'

export default {
  data () {
    return {
      showDUFile: false,
      file: null,
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
          const entity = data.entity
          downloadFromBase64(entity.base64, entity.fileName)
        }).catch(() => {

        });
    },
    upload () {
      if (!this.$refs.formUpload.validate()) {
        this.snack = true
        this.message = 'Llena todos los campos requeridos'
        return
      }
      const fileName = this.file.name
      if (fileName) {
        convertToBase64(this.file)
          .then((base64) => {
            return saveReport({
              base64,
              fileName
            })
          })
          .then((result) => {
            console.log(result)
            const data = result.data
            this.snack = true
            this.message = data.message
            this.profile = data.entity
          })
          .catch(() => {

          });
      }
    }
  },
}
</script>

<style lang="css" scoped>
</style>