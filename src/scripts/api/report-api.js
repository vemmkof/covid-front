import axios from 'axios'
import config from '../config'
const BASE_URL = config.BASE_URL
const REPORT_URL = `${BASE_URL}report`
const axiosConfig = config.axiosConfig

const getReport = () => {
    return axios.get(REPORT_URL, axiosConfig())
}


export { getReport }
