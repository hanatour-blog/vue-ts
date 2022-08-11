<template>
  <div>
    <header>
      <h1>Vue Todo-List</h1>
    </header>
    <div>
      <TodoInput  @save="createData"/>
      <ul v-if="isShowTodoList">
        <TodoListItem :todoArray="todoArray"/>
      </ul>
    </div>
  </div>
</template>

<script>

import {createItem,fetchItems} from '@/api/index'

import TodoListItem from '@/components/TodoListItem.vue'
import TodoInput from '@/components/TodoInput.vue'
// import { fetchItems } from '@/api/index'
export default {
  name: 'App',
  data() {
    return {
      title : '',
      todoArray : []
    }
  },
  computed:{
    isShowTodoList(){
      return this.todoArray.length > 0
    }
  },
  components: {
    TodoListItem,
    TodoInput,
  },
  mounted(){
    this.todoList()
  },
  methods: { 
    async createData(title){
      let inputData = {
        "title" : title
      } 
      let res = await createItem(inputData)
      if(res.status === 200){
        alert("등록 되었습니다.") 
      }
    }
    ,
    async todoList(){
      let res = await fetchItems()
      if(res.status === 200){
        this.todoArray = res.data
      }
    }
  }, 
}
</script>
