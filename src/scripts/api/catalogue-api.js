import axios from 'axios'
import Vue from 'vue'
import config from '../config'
const BASE_URL = config.BASE_URL
const PLATFORM_URL = `${BASE_URL}catalogue/platform`
const MEDIA_URL = `${BASE_URL}catalogue/media`
const PERCENT_URL = `${BASE_URL}catalogue/percent`
const axiosConfig = () => {
    const accessToken = Vue.$cookies.get('access_token')
    return {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
}

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