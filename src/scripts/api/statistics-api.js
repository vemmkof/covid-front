import axios from 'axios'
import config from '../config'
const BASE_URL = config.BASE_URL
const STATISTICS_URL = `${BASE_URL}statistics/group/`
const STATISTICS_PLATFORM_URL = `${STATISTICS_URL}platform`
const STATISTICS_MEDIA_URL = `${STATISTICS_URL}media`
const STATISTICS_PERCENT_URL = `${STATISTICS_URL}percent`
const axiosConfig = config.axiosConfig

const getPlatformStatistics = () => {
    return axios.get(STATISTICS_PLATFORM_URL, axiosConfig())    
}

const getMediaStatistics = () => {
    return axios.get(STATISTICS_MEDIA_URL, axiosConfig())
}

const getPercentStatistics = () => {
    return axios.get(STATISTICS_PERCENT_URL, axiosConfig())
}

export { getPlatformStatistics, getMediaStatistics, getPercentStatistics }