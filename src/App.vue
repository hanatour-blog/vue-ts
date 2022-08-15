<template>
  <div>
    <header>
      <h1>Vue Todo-List</h1>
    </header>
    <div>
      <TodoInput :todo.sync="todo" @addItem="onAddItem" />
      <ul>
        <TodoListItem
          v-for="todo in todoList"
          :key="todo.id"
          :todo="todo"
          @deleteItem="onDeleteItem"
          @updateItemStatus="onUpdateItemStatus"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue'
import TodoInput from '@/components/TodoInput.vue'
import itemApi from '@/api/item'

export default {
  name: 'App',
  data() {
    return {
      todoList: [],
      todo: '',
    }
  },
  components: {
    TodoListItem,
    TodoInput,
  },
  created() {
    this.getItems()
  },
  methods: {
    async getItems() {
      const { data } = await itemApi.fetchItems()
      this.todoList = data
    },
    async onDeleteItem(id) {
      await itemApi.deleteItem(id)
      this.getItems()
    },
    async onAddItem() {
      const todoData = {
        title: this.todo,
      }
      await itemApi.createItem(todoData)
      this.todo = ''
      this.getItems()
    },
    async onUpdateItemStatus(item) {
      const itemData = {
        ...item,
        completed: !item.completed,
      }
      await itemApi.updateItem(itemData)
      this.getItems()
    },
  },
}
</script>
