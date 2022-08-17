import axios from 'axios'

const BASE_URL = 'http://localhost:9099'

const api = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 5000,
  'Cache-Control': 'no-cache',
})

function getItems() {
  return api.get()
}

function updateItem(id, todo) {
  return api.patch('/' + id, todo)
}

function deleteItem(id) {
  return api.delete('/' + id)
}

function createItem(payload) {
  return api.post('/', payload)
}
export { getItems, createItem, updateItem, deleteItem }
