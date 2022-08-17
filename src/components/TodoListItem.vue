<template> 
  <div  >
    <li v-for="(todo,i ) in todoArray" :key="i">
      <span @click.prevent="completeRow(todo)" :class="todo.completed? 'complete' : ''"> {{todo.title}}</span>
      <button @click.prevent="deleteRow(todo.id)">삭제</button>
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
  },
  methods:{
    completeRow(todo){
      todo.completed = !todo.completed 
      this.$emit("completeRow",todo)
    },
    deleteRow(id){
      this.$emit("deleteRow",id)
    }
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
