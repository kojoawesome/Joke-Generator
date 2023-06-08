<template>
<div class="container">
  <div class="card">
  <h3> {{ Joke }} </h3>
  <button @click="generate"> Generate </button>
</div>
</div>
</template>

<script>
import { r2 } from '@/jokes';
import {hit,joke} from '@/jokes.js'

export default { 
  components: {
    
  },

  data(){
    return{
      Joke : joke,
      Hit: hit

    }
  },

  methods: {
    generate: r2,
  }
}
</script>

<style scoped>

.container{
  align-items: center;
  display: flex;
  flex-direction: column;
}
    .card{
        width: 700px;
        height: 400px;
        background-color: black;
        display: flex;
        flex-direction: column;
        color: bisque;
        border-radius: 20px;
        text-align: center;
    }
</style>