<template>
  <section>
      <div>
        <h1> {{cmpData.txt.title}} </h1>
        <p> {{cmpData.txt.paragraph}} </p>
      </div>
  </section>
</template>

<script>
export default {
  props: ['cmpData']
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
    padding: 0 2em;
    font-weight: 400;
    font-size: 1.15em;
  }
  
</style>
