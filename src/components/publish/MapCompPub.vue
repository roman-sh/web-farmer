<template>
  <section>
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
export default {
  props: ['cmpData']
}
</script>

<style>
  
</style>
