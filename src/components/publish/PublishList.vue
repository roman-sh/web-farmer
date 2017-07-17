<template>

  <main>
      <component 
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
    console.log('publish created entered');
    // if (!this.$store.state.page.comps.length) {
      console.log('publish created if entered');
      this.$store.commit('getPage');
    // }
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

</style>
