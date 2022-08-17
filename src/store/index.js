import Vue from 'vue'
import Vuex from 'vuex'
import { getItems, createItem } from '@/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    sortedTodos(state) {
      return state.todos.sort((a, b) => a.id - b.id)
    },
  },
  mutations: {
    SET_TODOS(state, items) {
      state.todos = items || []
    },
    ADD_TODO(state, item) {
      state.todos.push(item)
    },
  },
  actions: {
    async fetchTodoList({ commit }) {
      try {
        const { data } = await getItems()
        commit('SET_TODOS', data)
      } catch (err) {
        if (err.response) {
          alert(err.message)
        } else {
          alert('Network Issue...')
        }
      }
    },
    async addTodo({ commit }, title) {
      try {
        const { data } = await createItem({ title })
        if (typeof data !== 'object') throw new Error('invalid respose data')
        commit('ADD_TODO', data)
        return true
      } catch (err) {
        console.log(err)
        if (err.response) {
          alert(err.message)
        } else {
          console.error(err)
        }
      }
    },
  },
  modules: {},
})
