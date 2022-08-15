<template>
  <div>
    <label for="todo-input">오늘 할일: </label>
    <input type="text" v-model="todo" id="todo-input" />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  props: {
  },
  data(){
    return {
      todo: ''
    }
  },
  methods: {
    addTodo(){
      this.$emit('addTodo', this.todo)
      this.todo = ''
    }
  },
}
</script>
