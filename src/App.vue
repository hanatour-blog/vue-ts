<template>
  <div>
    <header>
      <h1>Vue Todo-List</h1>
    </header>
    <div>
      <TodoInput v-model="todoText" @inputText="inputText" @addText="addText" />
      <ul>
        <TodoListItem
          :key="item.id"
          v-for="item in todoItems"
          :index="item.id"
          :item="item"
          @delete="deleteTodo"
          @update="updateTodo"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue'
import TodoInput from '@/components/TodoInput.vue'
import { fetchItems, createItem, deleteItem, updateItem } from '@/api/index'
export default {
  name: 'App',
  data() {
    return {
      todoText: '',
      todoItems: [],
      payload: { title: '' },
    }
  },
  components: {
    TodoListItem,
    TodoInput,
  },
  created() {
    this.fetchTodoItems()
  },
  methods: {
    async fetchTodoItems() {
      this.todoItems = await fetchItems()
    },
    inputText(inputText) {
      this.todoText = inputText
    },
    addText() {
      createItem({
        title: this.todoText,
      }).then(() => this.init())
    },
    deleteTodo(id) {
      deleteItem(id).then(() => this.init())
    },
    updateTodo(id, completed) {
      updateItem(id, { completed }).then(() => this.init())
    },
    init() {
      this.todoText = ''
      this.fetchTodoItems()
    },
  },
}
</script>
