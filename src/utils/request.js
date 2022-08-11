import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:9099',
  timeout: 5000,
})
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },

  async function (error) {
    return Promise.reject(error)
  }
)

export default instance
