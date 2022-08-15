<template>
  <li>
    <span :class="['item', { complete : todoItem.completed }]" @dblclick="updateCompleted(todoItem.id, todoItem.completed)">{{todoItem.title}}</span>
    <button @click="deleteTodo(todoItem.id)">삭제</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItems',
  props: {
    todoItem: Object
  },
  data(){
    return {
      completed: false,
      title: false,
    }
  },
  mounted(){
    console.log('this.todoItem:', this.todoItem)
  },
  methods: {
    deleteTodo(id){
      this.$emit('deleteTodo', id)
    },
    updateCompleted(id, completed){
      this.$emit('updateTodo', id, !completed)
    }
  }
}
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
