<template>
  <div class="404">
      <div>{{ text }}</div>
      <router-link to="/">Let's try that from the top</router-link>
  </div>
  
</template>

<script>
export default {
  name: '404',
  data () {
    return {
      text: 'Uh oh.  Looks like this page doesn\'t exist.'
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
