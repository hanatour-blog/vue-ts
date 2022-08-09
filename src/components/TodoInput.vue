<template>
  <div>
    <label for="todo-input">오늘 할일: </label>
    <input type="text"/>
    <button>추가</button>
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
  },
}
</script>
