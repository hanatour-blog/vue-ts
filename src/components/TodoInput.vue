<template>
  <div>
    <label for="todo-input">오늘 할일: </label>
    <input type="text" :value="value" @input="inputTitle" @keypress.enter="submitTodo" />
    <button>추가</button>
  </div>
</template>

<script>
export default {
  name: 'todo-input',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    inputTitle($event) {
      this.$emit('input', $event.target.value)
    },
    submitTodo() {
      this.$emit('submit')
    },
  },
}
</script>
