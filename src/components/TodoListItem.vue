<template>
  <li>
    <span :class="completion" @click="updateTodo">{{ title }}</span>
    <button @click="deleteTodo">삭제</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItems',
  props: {
    item: Object,
    index: {
      type: Number,
    },
  },
  computed: {
    title() {
      return this.item?.title
    },
    completion() {
      return this.item?.completed ? "item complete" : "item"
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('delete', this.index)
    },
    updateTodo() {
      this.$emit('update', this.index, !this.item.completed)
    }
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
