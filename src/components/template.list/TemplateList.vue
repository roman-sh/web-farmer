<template>

  <main>
      <navbar></navbar>

      <add-cmpn-popup 
        v-if="isAddCompPopupShown"
      ></add-cmpn-popup>

      <editor v-if="isEditorShown"></editor>
      <div class="placeholder"></div>
      <component 
          v-for="cmp in cmpTemplates" 
          :key="cmp.id" 
          :is="cmp.type"
          :cmpData="cmp"
      ></component>

      <h2 v-if="!cmpTemplates.length"> Start building your website by adding components </h2>

      <button @click="handleAddCompPopup">
        <img src="../../assets/img/add.png">
      </button>
      
  </main>
</template>

<script>
import Navbar from '../service/Navbar';
import AddCmpnPopup from '../service/AddCmpnPopup';
import TitleCmpn from '../component.templates/TitleCmpn';
import Cat from '../component.templates/Cat';
import AppHeader from '../component.templates/AppHeader';
import Carousel from '../component.templates/Carousel';
import MapComp from '../component.templates/MapComp';
import Editor from '../service/Editor';


export default {
  components: {
    AddCmpnPopup,
    TitleCmpn,
    Cat,
    AppHeader,
    Carousel,
    MapComp,
    Editor,
    Navbar  
  },
  created() {
    this.$store.commit('initPage');
  },
  methods: {
    handleAddCompPopup() {
      this.$store.commit('toggleAddCompPopup');
    }
  },
  computed: {
    isAddCompPopupShown() {
      return this.$store.state.isAddCompPopupShown
    },
    cmpTemplates() {
      return this.$store.state.page.comps;
    },
    defaultTemplates() {
      return this.$store.state.defaultComponentData;
    },
    isEditorShown() {
      return this.$store.state.isEditorShown
    },
  }
}
</script>

<style scoped>

  h2 {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      margin-top: 15%;
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
.placeholder {
  height: 53px;
}

</style>
