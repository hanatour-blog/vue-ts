<template>
  <div>
    <TodoInput v-model="todoTitle" @submit="onSubmitTodo" />
    {{ todoTitle }}
    <ul>
      <TodoListItem v-for="todo in sortedTodos" :key="todo.id" :item="todo" />
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TodoPage',
  components: {
    TodoListItem: () => import('@/components/TodoListItem.vue'),
    TodoInput: () => import('@/components/TodoInput.vue'),
  },
  data() {
    return {
      todoTitle: '',
    }
  },
  computed: {
    ...mapGetters(['sortedTodos']),
  },
  created() {},
  methods: {
    ...mapActions(['addTodo']),
    onSubmitTodo() {
      console.log('onSubmitTodo', this.todoTitle)
      this.addTodo(this.todoTitle).then(() => {
        this.todoTitle = ''
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
