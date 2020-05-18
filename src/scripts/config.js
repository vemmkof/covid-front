import Vue from 'vue'
const axiosConfig = () => {
    const accessToken = Vue.$cookies.get('access_token')
    return {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
}

export default {
    // BASE_URL: 'http://localhost:8081/',
    BASE_URL: 'https://rocky-depths-49701.herokuapp.com/',
    axiosConfig
};
