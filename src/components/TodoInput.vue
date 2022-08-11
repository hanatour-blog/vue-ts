<template>
  <div>
    <label for="todo-input">오늘 할일: </label>
    <input type="text" v-model="title"/>
    <button @click.prevent="createData">추가</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput', 
  data(){
    return{
      title : ''
    }
  },  
  methods: {
    createData(){ 
      this.$emit("save",this.title)

      this.title = ''
    }
  },
}
</script>
