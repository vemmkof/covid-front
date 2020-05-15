import axios from 'axios'
import config from '../config'
import queryString from 'query-string'
const BASE_URL = config.BASE_URL
const TOKEN = `${BASE_URL}oauth/token`

const login = (credentials) => {
    return axios.post(TOKEN, queryString.stringify(credentials), {
        headers: {
            ...config.URL_ENCODED,
            'Access-Control-Allow-Origin': '*'
        },
        ...config.AUTH
    })

}

export { login }