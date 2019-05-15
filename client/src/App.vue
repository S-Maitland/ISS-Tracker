<template>
  <div id="app">
    <Header text="ISS Tracker"/>
    <router-view id="view"/>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',

  components: {
    Header
  }
  }
</script>

<style>
html, body, #app {
  height: 100%;
}

body {
  margin: 0;
  background-image: url('./assets/stars.png')
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  background-image: url('./assets/stars.png');
  height: 100%;
}

#view {
  height: 100%;
}

h1 {
  /* height: 5vh; */
  margin: 0;
  padding: 5vh;
  /* background-color: #000024; */
  color: white;
  /* background-image: url('./assets/stars.png'); */
}

</style>
