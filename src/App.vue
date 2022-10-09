<template>
  <nav-bar></nav-bar>
  <router-view class="paginas"></router-view>
  <footer-main></footer-main>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterMain from './components/FooterMain.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterMain
}
}
</script>

<style>
* {
  box-sizing: border-box;
  /* background-color: #F5E2E2; */
}

#app {
  font-family: sans-serif;
  text-align: center;
  color: white;
  /* background-color: #F5E2E2; */
  /* background: rgb(9, 21, 121);
  background: radial-gradient(circle, rgba(9, 21, 121, 1) 24%, rgba(9, 21, 121, 1) 35%, rgba(0, 212, 255, 1) 100%); */
  background: rgb(9,21,121);
background: linear-gradient(90deg, rgba(9,21,121,1) 24%, rgba(9,21,121,1) 35%, rgba(0,212,255,1) 100%);

  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}

.paginas {
  margin-top: 20px;
}
</style>
