<template>
  <div id="app">
    <div>
      <img src="./assets/logo.png">
    </div>
    <HelloWorld></HelloWorld>

    <div>
      <router-link to="/A">Go to A</router-link>
      <router-link to="/B">Go to B</router-link>
      <router-link to="/C">Go to C</router-link>
      <router-link to="/D">Go to D</router-link>
      <router-link to="/E">Go to E</router-link>
      
      <router-view></router-view>
    </div>

  </div>

  
</template>

<script>
import HelloWorld from "./components/HelloWorld"

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
