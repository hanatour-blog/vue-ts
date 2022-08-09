<template>
  <div>
    <header>
      <h1>Vue Todo-List</h1>
    </header>
    <div>
      <TodoInput />
      <ul>
        <TodoListItem />
      </ul>
    </div>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue'
import TodoInput from '@/components/TodoInput.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    TodoListItem,
    TodoInput,
  },
  methods: {},
}
</script>
