<template>
  <div class="intro">
      <h1>I'm <span class="red">{{ name }}</span>, a Boston-based web developer.  I design and build web products and {{ foo }}.</h1>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: ['foo'],
  data () {
    return {
      name: 'Vinny',
      other: 'do other things'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.intro {
  height: 100vh;
  position: relative;
}

h1 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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