<template>
  <div>
    <header>
      <h1>Vue Todo-List</h1>
    </header>
    <div>
      <TodoInput  @save="createData"/>
      <ul v-if="isShowTodoList">
        <TodoListItem :todoArray="todoArray" @deleteRow="deleteRow" @completeRow="completeRow"/>
      </ul>
    </div>
  </div>
</template>

<script>

import {createItem,fetchItems,deleteItem,updateItem} from '@/api/index'

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
    async completeRow(inputData){ 
      let res = await updateItem(inputData)
      if(res.status === 200){ 
        this.todoList()
      }
    },
    async deleteRow(deleteId){ 
      let res = await deleteItem(deleteId)
      if(res.status === 200){ 
        this.todoList()
      }
    },
    async createData(title){
      let inputData = {
        "title" : title
      } 
      let res = await createItem(inputData)
      if(res.status === 200){
        alert("등록 되었습니다.") 
        this.todoList()
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
