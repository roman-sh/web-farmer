<template>
  <section>
      <edit-components :cmpId="cmpData.id"></edit-components>
      <div>
        <h1
          contenteditable="true" 
          @blur="editTitle($event)"
          spellcheck="false"
        >
          {{cmpData.txt.title}}
        </h1>

        <p
          contenteditable="true" 
          @blur="editParagraph($event)"
          spellcheck="false"
        >
          {{cmpData.txt.paragraph}}
        </p>
      </div>
  </section>
</template>

<script>
import editComponents from './components-edit';

export default {
  props: ['cmpData'],
  components: {
    editComponents
  },
  methods: {

    editTitle(event) {
      this.cmpData.txt.title = event.target.innerText ;
    },
    editParagraph(event) {
      this.cmpData.txt.paragraph = event.target.innerText ;
    }

  },
}
</script>

<style scoped>

  div {
    color: #373834;
  }

  h1 {
    font-size: 2.25em;
    font-weight: 900;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    padding: 0 10% 1em;
    font-weight: 400;
    font-size: 1.15em;
  }
  
</style>
