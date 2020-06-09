import axios from 'axios'
import config from '../config'
const BASE_URL = config.BASE_URL
const REPORT_URL = `${BASE_URL}report`
const REPORT_BAJA_URL = `${REPORT_URL}/baja`
const REPORT_DOWNLOAD_URL = `${REPORT_URL}/download`

const axiosConfig = config.axiosConfig

const getReport = () => {
    return axios.get(REPORT_URL, axiosConfig())
}

const saveReport = (report) => {
    return axios.post(REPORT_URL, report, axiosConfig())
}

const getBajaReport = () => {
    return axios.get(REPORT_BAJA_URL, axiosConfig())
}

const downloadReport = (fileName) => {
    return axios.get(REPORT_DOWNLOAD_URL, {
        ...axiosConfig(),
        params: { fileName }
    })
}

export { getReport, saveReport, getBajaReport, downloadReport }
