<template>
<section>
    <edit-components :cmpId="cmpData.id"></edit-components>
    <div :style="{ backgroundImage: 'url(' + cmpData.imgUrl + ')' }">
      <p 
        contenteditable="true" 
        @blur="editTextContent($event)"
        spellcheck="false"
      > 
        {{cmpData.txt}}
      </p>
    </div>
  </section>
</template>
<script>
import editComponents from './components-edit'
export default {
  props: ['cmpData'],
  
  methods: { 
    editTextContent(event) {
      this.cmpData.txt = event.target.innerText ;
    }
  },
  components: {
    editComponents
  }
}
</script>

<style scoped>
div {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}

p {
  font-family: sans-serif;
  font-size: 2em;
  padding: 3em;;
  font-weight: 600;
  text-shadow: 1px 1px 4px #222;
  color: white;
  margin: 0 auto;
}
</style>
