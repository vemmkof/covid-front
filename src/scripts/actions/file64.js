import download from 'downloadjs'
const app = 'application'
const img = 'image'
const xls = 'vnd.ms-excel'
const xlsx = 'vnd.openxmlformats-officedocument.spreadsheetml.sheet'

const convertToBase64 = file => {
  if (JSON.parse(JSON.stringify(file))) {

    if (file instanceof Blob) {
      const reader = new FileReader()
      return new Promise((resolve, reject) => {
        reader.onerror = () => {
          reader.abort()
          reject(new DOMException('No se pudo procesar el archivo'))
        }
        reader.onload = () => {
          resolve(reader.result.split('base64,')[1])
        }
        reader.readAsDataURL(file)
      })
    } else {
      return Promise.reject(new Error('Archivo no válido'))
    }
  } else {
    return Promise.reject(new Error('Archivo no válido'))
  }
}

const getType = ext => {
  ext = ext.toLowerCase()
  ext = ext === 'jpg' ? 'jpeg' : ext
  switch (ext) {
    case 'pdf':
    case 'xml':
      return `${app}/${ext}`
    case 'png':
    case 'jpeg':
    case 'bmp':
      return `${img}/${ext}`
    case 'csv':
      return 'text/csv'
    case 'xls':
      return `${app}/${xls}`
    case 'xlsx':
      return `${app}/${xlsx}`
  }
}

const getExt = fileName => {
  const arrays = fileName.split('.')
  const length = arrays.length
  return arrays[length - 1]
}

const downloadFromBase64 = async (file, fileName) => {
  console.log(fileName)
  const ext = getExt(fileName)
  const type = getType(ext)
  const link2Source = `data:${type};base64,${file}`
  download(link2Source, fileName, type)
}
export { convertToBase64, downloadFromBase64 }
