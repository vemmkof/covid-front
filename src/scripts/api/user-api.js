import axios from 'axios'
import config from '../config'
const BASE_URL = config.BASE_URL
const USER_URL = `${BASE_URL}user`
const USER_GROUP_URL = `${BASE_URL}user/group`
const axiosConfig = config.axiosConfig

const getUser = () => {
    return axios.get(USER_URL, axiosConfig())
}

const getUserGroup = () => {
    return axios.get(USER_GROUP_URL, axiosConfig())
}

export { getUser, getUserGroup }
