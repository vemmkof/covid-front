import axios from 'axios'
import Vue from 'vue'
import config from '../config'
const BASE_URL = config.BASE_URL
const USER_URL = `${BASE_URL}user`
const USER_GROUP_URL = `${BASE_URL}user/group`
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

const getUserGroup = () => {
    return axios.get(USER_GROUP_URL, axiosConfig())
}

export { getUser, getUserGroup }
