<template>
  <div id="app">
    <font-awesome-icon icon="coffee" />
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
}
body, ul, li {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}

</style>
