<template>
  <h3>Dad Joke Generator</h3>
  <Article/>
  <p> by Kojo for ALX</p>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Article from './components/Article1.vue'

export default {
  name: 'App',
  components: {Article}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
