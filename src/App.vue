<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Indie+Flower|Roboto|Ubuntu');

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: #2c3e50;*/

  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
    padding: 10px;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
</style>
