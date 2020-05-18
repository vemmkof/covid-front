import axios from 'axios'
import config from '../config'
const BASE_URL = config.BASE_URL
const PLATFORM_URL = `${BASE_URL}catalogue/platform`
const MEDIA_URL = `${BASE_URL}catalogue/media`
const PERCENT_URL = `${BASE_URL}catalogue/percent`
const axiosConfig = config.axiosConfig

const getPlatform = () => {
    return axios.get(PLATFORM_URL, axiosConfig())
}
const getMedia = () => {
    return axios.get(MEDIA_URL, axiosConfig())
}
const getPercent = () => {
    return axios.get(PERCENT_URL, axiosConfig())
}

export { getPlatform, getMedia, getPercent }