<template>
  <div class="container">
    <div class="card">
      <h3>{{ Joke }}</h3>
      <button @click="generate">Generate</button>
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
</style>
