<template>
  <div class="container">
    <div class="card">
      <div class="propet">
        <h4>The Joke</h4>
        <h3 style="color: white;">{{ Joke }}</h3>
        <h4>The Punchline</h4>
        <h3 style="color: white;" >{{ Hit }}</h3>
        <button @click="generate">Generate</button>
      </div>
    </div>
  </div>
</template>

<script>
import { r2 } from '@/jokes.js';

export default {
  data() {
    return {
      Joke: "",
      Hit: ""
    };
  },

  methods: {
    async generate() {
      const { joke, hit } = await r2();
      this.Joke = joke;
      this.Hit = hit;
    }
  },

  mounted() {
    this.generate();
  }
};
</script>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.card {
  width: 700px;
  height: 400px;
  background-color: black;
  display: flex;
  flex-direction: column;
  color: bisque;
  border-radius: 20px;
  text-align: center;
}

.propet {
  padding: 20px;
}

.propet button{
  border-radius: 30px;
  padding: 5px;
}

</style>
