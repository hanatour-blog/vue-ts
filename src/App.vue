<template>
  <div>
    <header>
      <h1>Vue Todo-List</h1>
    </header>
    <div>
      <TodoInput @addTodo="addTodo" />
      <ul>
        <template v-for="todoItem in todoList">
          <TodoListItem
            :todoItem="todoItem"
            :key="todoItem.id"
            @deleteTodo="deleteTodo"
            @updateTodo="updateTodo"
          />
        </template>
      </ul>

    </div>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue'
import TodoInput from '@/components/TodoInput.vue'
import { createItem, fetchItems, deleteItem, updateItem } from '@/api'


export default {
  name: 'App',
  data() {
    return {
      todoList: null
    }
  },
  components: {
    TodoListItem,
    TodoInput,
  },
  methods: {
    addTodo(todo){
      createItem({
        "title": todo
      }).then( () => {
        this.fetchTodoList();
      })
    },
    async fetchTodoList(){
      const { data } = await fetchItems()
      this.todoList = data.slice()
      console.log('this.todoList:', this.todoList)
    },
    deleteTodo(id){
      deleteItem(id).then(() => {
        this.fetchTodoList()
      })
    },
    updateTodo(id, completed){
      updateItem(id, {
        completed: completed
      }).then(() => {
        this.fetchTodoList()
      })
    }
  },
  mounted(){
    this.fetchTodoList()
  }
}
</script>
