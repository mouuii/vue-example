<script setup>

import q from "@/quizes.json"
import {ref,watch} from "vue"
import Card from "@/components/Card.vue"

const quizes = ref(q)
const search = ref("")

watch(search,()=>{
  quizes.value = q.filter(quize=>quize.name.toLowerCase().includes(search.value.toLocaleLowerCase()))
})

</script>
<template>

  <div class="container">
    <header>
      <h1>
        Quizes
      </h1>
      <input v-model.trim="search" type="text" placeholder="Search">
    </header>

    <div class="options-container">
     <Card v-for="quiz in quizes" :quiz="quiz"/>
    </div>
  </div>
</template>


<style scoped>

.container {
  max-width: 1000px;
  margin: 0 auto;
  /* background-color: beige; */
}

header{
  margin-bottom: 10px;
  margin-top:30px;
  display:flex;
  /* background-color: aqua; */
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border:none;
  background-color: rgba(128,128,128,0.1);
  padding: 10px;
  border-radius:5px ;
}

.options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}

</style>