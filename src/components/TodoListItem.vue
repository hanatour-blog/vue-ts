<template> 
  <div  >
    <li v-for="(todo,i ) in todoArray" :key="i">
      <span class="item"> {{todo.title}}</span>
      <button>삭제</button>
    </li> 
  </div>
</template>

<script>
 
export default {
  
  name: 'TodoItems',
  props: {
    todoArray:{
      type : Array,
      default : []
    }
  },
  created(){
    console.log(this.todoArray)
  }
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
