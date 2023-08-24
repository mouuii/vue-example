<script setup>
import{ref} from "vue";

const showModal = ref(false)

let newContent = ref("")
let cards = ref([])

const addContent = ()=>{
  cards.value.push({content:newContent.value,date:new Date()})
  newContent.value = ""
  showModal.value= false
}

</script>


<template>
<main>
  <div v-if="showModal" class="overlay">
    <div class="modal">
      <textarea v-model="newContent" name="note" id="note" cols="30" rows="10"></textarea>
  
      <button @click="addContent">add note</button>
      <button  @click="showModal = false" class="close">close</button>
    </div>
  </div>
  <div class="container">
    <header>
      <h1>Notes</h1>
      <button @click="showModal = true">+</button>
    </header>
    <div class="cards-container">
      <div v-for="card in cards" class="card">
        <p class="main-text">{{ card.content }}</p>
        <p class="date">{{ card.date.toLocaleDateString("en-US") }}</p>
      </div>
    </div>
  </div>
</main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;
    background-color: aqua;
  }
  .container{
    max-width: 1000px;
    background-color: rgb(116, 48, 97);
    padding: 10px;
    margin: 0 auto;
  }

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1{
    font-weight: bold;
    margin-bottom: 25px;
  }

  header button{
    border:none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor:pointer;
    background-color: rgb(156, 192, 58);
    border-radius:100%;
    font-size: 20px;
  }
  .card{
    width: 225px;
    height: 225px;
    background-color: rgb(6, 216, 115);
    padding: 10px;
    border-radius: 15px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .date{
    font-size: 12.5px;
    font-weight: bold;
  }

  .cards-container{
    display: flex;
    flex-wrap: wrap;
  }
  .overlay{
    width:100%;
    height:100%;
    position: absolute;
    background-color: rgba(13, 13, 13, 0.5);
    z-index:10;
    display:flex;
    align-items: center;
    justify-content: center;
  }

  .modal{
    width:750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .modal button{
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blue;
    border:none;
    color:white;
    cursor:pointer;
    margin-top: 10px;
  }

 .modal .close{
    background-color: aquamarine;
  }
</style>