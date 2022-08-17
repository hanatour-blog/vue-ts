<template>
  <li>
    <span class="item complete">{{ item.title }}</span>
    <button>삭제</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItems',
  props: {
    item: {
      type: Object,
      required: true,
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
