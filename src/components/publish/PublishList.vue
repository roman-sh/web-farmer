<template>

  <main>
      <div 
          class="loader"
          v-if="!$store.state.page.comps.length"
      ></div>
      <component 
          v-show="$store.state.page.comps.length"
          v-for="cmp in cmpTemplates" 
          :key="cmp.id" :is="cmp.type + '-pub'"
          :cmpData="cmp"
      ></component>
  </main>
</template>

<script>
import TitleCmpnPub from '../publish/TitleCmpnPub';
import AppHeaderPub from '../publish/AppHeaderPub';
import CarouselPub from '../publish/CarouselPub';
import MapCompPub from '../publish/MapCompPub';

export default {

  components: {
    TitleCmpnPub,
    AppHeaderPub,
    CarouselPub,
    MapCompPub
  },
  created(){
    if (!this.$store.state.page.comps.length) {
      this.$store.commit('getPage');
    }
  },
  computed: {
    cmpTemplates() {
      return this.$store.state.page.comps;
    }
  }
}
</script>

<style scoped>
  h2 {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      margin-top: 0;
  }
  
  button {
    background-color: transparent;
    font-size: 2em;
    border: none;
    padding: 20px;
  }

  img {
  height: 50px;
  margin: auto;
  }

  .loader,
  .loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(96, 52, 52, 0.2);
  border-right: 1.1em solid rgba(127, 62, 62, 0.2);
  border-bottom: 1.1em solid rgba(112, 58, 58, 0.2);
  border-left: 1.1em solid #743333;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
