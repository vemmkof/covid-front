import axios from 'axios'
import config from '../config'
import queryString from 'query-string'
import Vue from 'vue'
const BASE_URL = config.BASE_URL
const TOKEN_URL = `${BASE_URL}oauth/token`
const TOKEN_CHECK_URL = `${BASE_URL}oauth/check_token`

const axiosConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic dnVlU2VndWltaWVudG9Db3ZpZEFjdGl2aWRhZGVzOjNlYWIyNTY0MzM4OWFhMDMyYzc2ZDc0NGQ4ZDU3MWFl'
    }
}

const login = (credentials) => {
    credentials.grant_type = 'password'
    return axios.post(
        TOKEN_URL,
        queryString.stringify(credentials),
        axiosConfig
    )

}

const checkToken = () => {
    const body = {}
    body.token = Vue.$cookies.get('access_token')
    return axios.post(
        TOKEN_CHECK_URL,
        queryString.stringify(body),
        axiosConfig
    )
}

export { login, checkToken }