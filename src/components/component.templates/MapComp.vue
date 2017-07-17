<template>
  <section>
    <edit-components :cmpId="cmpData.id"></edit-components>
    <gmap-map
      :center="cmpData.marker"
      :zoom="10"
      style="width: 100%; height: 300px"
    >
      <gmap-marker
        :position="cmpData.marker"
      ></gmap-marker>
    </gmap-map>
  </section>
</template>

<script>
import editComponents from './components-edit';
export default {
  props: ['cmpData'],
  components: {
    editComponents
  },

}
</script>

<style scoped>
  
</style>
