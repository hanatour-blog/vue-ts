<template>
  <li>
    <span class="item complete">할일</span>
    <button>삭제</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItems',
  props: {},
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
