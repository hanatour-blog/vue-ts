import axios from 'axios'

const BASE_URL = 'http://localhost:9099'

const api = axios.create({
  baseURL: `${BASE_URL}`,
})

function fetchItems() {
  return api.get()
}

function updateItem(id) {
  return api.patch(id)
}

function deleteItem(id) {
  return api.delete(id)
}

function createItem(payload) {
  return api.post("/",payload).then((e)=>{
    return e
  })
}
export { fetchItems, createItem, updateItem, deleteItem }
