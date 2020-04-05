import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: '127.0.0.1:8000',
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        return config
    },error => {

    })

    return instance(config)
}
