<script>
export default {

  data() {
    return {
      title: "",
      todos:[{title:"吃饭",done:false},{title:"sleep",done:true}]
    }
  },
  methods:{
    addTodo(){
      this.todos.push({title:this.title,done:false})
      this.title = ""
    },
    clear(){ this.todos = this.todos.filter(v=>!v.done) }
  },
  computed:{
    active(){
      return this.todos.filter(v=>!v.done).length
    },
    all(){
      return this.todos.length
    },
    allDone:{
      get: function(){
        return this.active === 0
      },
      set: function (val) { this.todos.forEach(todo=>{ todo.done = val }); }
    }
  }
}
</script>

<template>
 <h2>{{title}}</h2>
 <input type="text" v-model="title" @keydown.enter="addTodo">
 <button v-if="active<all" @click="clear">清理</button>
 <ul>
  <li v-for="todo in todos">
    <input type="checkbox" v-model="todo.done">
    <span :class="{done:todo.done}">{{todo.title}}</span>
  </li>
 </ul>
 <div>
 全选<input type="checkbox" v-model="allDone">
  <span> {{active}} / {{all}} </span>
 </div>

</template>

<style>
.done{
  color:grey;
  text-decoration:line-through;
}

</style>
