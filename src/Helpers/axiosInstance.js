import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = 'https://event-spectra-backend-nodejs.onrender.com/api/v1'
axiosInstance.defaults.withCredentials = true

export default axiosInstance