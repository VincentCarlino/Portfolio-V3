<template>
  <div class="about">
      {{ text }}
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      text: 'This is the about section.  This data is being brought in through the data of this component.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
