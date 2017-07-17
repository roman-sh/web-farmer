<template>
  <section>
    <navbar></navbar>
    <div class="welcome" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
      <div>
        <h1>Welcome to Farmer-builder!</h1>
        <router-link to="template"><h2>Build a website for your farm</h2></router-link>
      </div>
    </div>
  </section>
</template>

<script>
  import Navbar from './service/Navbar';
  export default {
    name: 'welcome',
    components: {
      Navbar
    },
    data() {
      return {
        backgroundImage:'http://c1.staticflickr.com/3/2855/9841927213_c087ecb947_k.jpg'
      }
    },
  }
</script>

<style scoped>
h1,
h2 {
  font-family: 'Indie Flower', cursive;
  padding-top: 10px;
  font-weight: normal;
  color: white;
  text-shadow: 1px 1px 4px #222;
  margin-top: 0;
  margin: 0 auto;
}

div>div {
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  top: -15%;
}

.welcome {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: auto;
}

html, body {
  padding: 0;
  margin: 0;
}

h1 {
  font-size: 4em;
}

h2 {
  margin-top: 0;
  font-size: 3em;
  color: white;
  cursor: pointer;
}

h2:hover{
    color: #42b983;
}
</style>