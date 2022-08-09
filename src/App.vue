<template>
  <div>
    <TodoInput />
    <TodoItems />
  </div>
</template>

<script>
import TodoItems from '@/components/TodoItems.vue'
import TodoInput from '@/components/TodoInput.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    TodoItems,
    TodoInput,
  },
  methods: {},
}
</script>
