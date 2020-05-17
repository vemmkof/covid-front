import axios from 'axios'
import Vue from 'vue'
import config from '../config'
const BASE_URL = config.BASE_URL
const USER_URL = `${BASE_URL}user`

const axiosConfig = () => {
    const accessToken = Vue.$cookies.get('access_token')
    return {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
}


const getUser = () => {
    return axios.get(USER_URL, axiosConfig())
}

export { getUser }
