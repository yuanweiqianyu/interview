<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <Introduce/>
  <StorageView/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import a from './js/hello.ts';
import Introduce from "./components/01introduce.vue";
import StorageView from "./components/storage.vue";


export default {
  name: 'App',
  data: function (){
    return {
      a
    };
  },
  components: {
    // HelloWorld
    Introduce,
    StorageView
  },
  methods: {
    mounted() {

    }
  }
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
