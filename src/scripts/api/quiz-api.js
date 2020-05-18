import axios from 'axios'
import config from '../config'
const BASE_URL = config.BASE_URL
const QUIZ_URL = `${BASE_URL}quiz`
const axiosConfig = config.axiosConfig

const sendQuiz = (matrix) => {
    return axios.post(QUIZ_URL, {
        answers: matrix
    } , axiosConfig())
}

export { sendQuiz }
