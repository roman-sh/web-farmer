<template>
  <div :style="cmpData.style">
      <img :src="catUrl">
      <h3>{{ cmpData.txt }}</h3>
  </div>
</template>

<script>
    export default {
        props: ['cmpData'],
        
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
