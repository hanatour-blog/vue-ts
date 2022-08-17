import axios from 'axios'

const BASE_URL = 'http://localhost:9099'

const api = axios.create({
  baseURL: `${BASE_URL}`,
})

function fetchItems() {
  return api.get()
}

function updateItem(payload) {
  return api.patch("/"+payload.id,payload)
}

function deleteItem(id) {
  return api.delete("/"+id)
}

function createItem(payload) {
  return api.post("/",payload).then((e)=>{
    return e
  })
}
export { fetchItems, createItem, updateItem, deleteItem }
