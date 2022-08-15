import request from '@/utils/request'

export default {
  fetchItems() {
    return request({
      url: '/',
      method: 'get',
    })
  },
  updateItem(item) {
    return request({
      url: `/${item.id}`,
      method: 'patch',
      data: item,
    })
  },
  deleteItem(itemId) {
    return request({
      url: `/${itemId}`,
      method: 'delete',
    })
  },
  createItem(item) {
    return request({
      url: '/',
      method: 'post',
      data: item,
    })
  },
}
