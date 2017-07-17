<template>
  <div :style="cmpData.style">
      <edit-components :cmpId="cmpData.id"></edit-components>
      <img :src="catUrl">
      <h3>{{ cmpData.txt }}</h3>
  </div>
</template>
<script>
import editComponents from './components-edit';

export default {
  props: ['cmpData'],
  components: {
    editComponents
  },
  data() {
    return {
      catUrl: this.cmpData.url + '&' + Date.now()
    }
  },
}
</script>

<style scoped>
div {
  width: 100%;
  height: 200px;
  padding: .2em;
  margin: 0;
}
img {
  height: 150px;
  float: left;
}
</style>
