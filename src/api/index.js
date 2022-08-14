import axios from 'axios'

const BASE_URL = 'http://localhost:9099'

const api = axios.create({
  baseURL: `${BASE_URL}`,
})

function fetchItems() {
  return api.get()
}

function updateItem(id, payload) {
  return api.patch( `${id}`, payload)
}

function deleteItem(id) {
  return api.delete(`${id}`)
}

function createItem(payload) {
  return api.post("/", payload)
}
export { fetchItems, createItem, updateItem, deleteItem }
