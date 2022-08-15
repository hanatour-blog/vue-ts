<template>
  <div>
    <label for="todo-input">오늘 할일: </label>
    <input type="text" :value="value" @input="inputText" />
    <button @click="addText">추가</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    inputText(event) {
      this.$emit('inputText', event.target.value)
    },
    addText() {
      this.$emit('addText')
    },
  },
}
</script>
