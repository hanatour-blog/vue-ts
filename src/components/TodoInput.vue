<template>
  <div>
    <label for="todo-input">오늘 할일: </label>
    <input :value="todo" type="text" @input="inputText" />
    <button @click="addItem">추가</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  props: {
    todo: {
      type: String,
    },
  },
  methods: {
    inputText(event) {
      this.$emit('update:todo', event.target.value)
    },
    addItem() {
      this.$emit('addItem')
    },
  },
}
</script>
