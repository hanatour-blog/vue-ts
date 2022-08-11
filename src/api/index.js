import axios from 'axios'

const BASE_URL = 'http://localhost:9099'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})

api.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  function (response) {
    return response && response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

function fetchItems() {
  return api.get()
}

function updateItem(id, payload) {
  return api.patch(`${BASE_URL}/${id}`, payload)
}

function deleteItem(id) {
  return api.delete(`${BASE_URL}/${id}`)
}

function createItem(payload) {
  return api.post(BASE_URL, payload)
}
export { fetchItems, createItem, updateItem, deleteItem }
