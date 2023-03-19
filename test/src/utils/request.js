import axios from 'axios';
import store from '../store/index.js'
const request = axios.create({
    baseURL: "/api",
    timeout: 20000
})
const CanselToken = axios.CancelToken
request.interceptors.request.use((config) => {


    config.cancelToken = new CanselToken((cb => {
        const url = config.url
        store.commit('ADD_FN', { url: url, cb: cb })
    }))
    return config
})

request.interceptors.response.use((response) => {
    const url = response.config.url
    store.commit('RM_FN', url)
    return response.data;
})

export default request
