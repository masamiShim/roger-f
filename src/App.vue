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
}
body, ul, li {
  padding: 0;
  margin: 0;
  background: rgba(255,255,255, .9);
}
ul {
  list-style: none;
}
@font-face {
  font-family: 'mini-wakuwaku';
  src: url("assets/mini-wakuwaku.otf");
  src: url("assets/mini-wakuwaku-maru.otf");
}
</style>
