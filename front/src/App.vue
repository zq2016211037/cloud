<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin: 0 5%; */
  height: 100%;
}
body, p, div, ul, li, h1, h2, h3, h4{
  margin: 0;
  padding: 0;
}
body,html{
  height: 100%;
}
</style>
