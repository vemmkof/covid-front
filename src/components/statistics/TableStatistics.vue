<template>
  <div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="bajas"
      :search="search"
      class="elevation-1"
      :footer-props="footerProps"
    >
      <template v-slot:item.comprobrante="{ item }">
        <v-btn
          icon
          color="primary"
          @click.stop="downloadFile(item.comprobrante)"
        >
          <v-icon>mdi-download</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { headers } from '@/scripts/components/baja-table'
import { getBajaReport, downloadReport } from '@/scripts/api/report-api'
import { downloadFromBase64 } from '@/scripts/actions/file64'
import { mapFields } from 'vuex-map-fields'
export default {
  data () {
    return {
      headers,
      bajas: [],
      search: '',
      footerProps: {
        'items-per-page-options': [10, 20, 30, 40, 50, -1]
      }
    }
  },
  computed: {
    ...mapFields(['loader', 'snack', 'message'])
  },
  mounted () {
    this.loader = true
    getBajaReport()
      .then((result) => {
        console.log(result)
        this.mapData(result.data.entity)
        this.message = result.data.message
        this.snack = true
      }).catch((err) => {
        console.log(err)
        this.message = err
        this.snack = true
      })
      .finally(() => {
        this.loader = false
      })
  },
  methods: {
    mapData (data) {
      this.bajas = data.bajas.map((e, index) => this.getObjectMapped(e, index))
      console.log(JSON.parse(JSON.stringify(this.bajas)))
    },
    getObjectMapped (e, index) {
      const alumno = e.alumno
      const grupo = e.grupo
      const ua = grupo.unidadAprendizaje
      return {
        id: index + 1,
        boleta: alumno.noBoleta,
        nombre: this.getFullName(alumno),
        secuencia: grupo.secuencia,
        clave: ua.idUnidadAprendizaje,
        unidadAprendizaje: ua.nombreUnidadAprendizaje,
        comprobrante: alumno.fileName
      }
    },
    getFullName (alumno) {
      return `${alumno.nombre} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}`
    },
    downloadFile (fileName) {
      downloadReport(fileName)
        .then((result) => {
          console.log(result)
          this.message = result.data.message
          this.snack = true
          const entity = result.data.entity
          downloadFromBase64(entity.base64, entity.fileName)
        }).catch((err) => {
          console.log(err)
        });
    },
  },
}
</script>

<style lang="sass" scoped>
</style>