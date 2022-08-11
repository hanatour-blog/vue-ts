<template>
  <li>
    <span :class="todoItemClass" class="item" @click="updateItemStatus">{{ todo.title }}</span>
    <button @click="deleteItem">삭제</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItems',
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    todoItemClass() {
      return this.todo.completed ? 'complete' : ''
    },
  },
  methods: {
    deleteItem() {
      this.$emit('deleteItem', this.todo.id)
    },
    updateItemStatus() {
      this.$emit('updateItemStatus', this.todo)
    },
  },
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
