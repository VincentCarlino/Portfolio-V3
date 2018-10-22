<template>
  <div class="intro" id="home">
      <h1>I'm <span class="red">{{ name }}</span>, a Boston-based developer.  I design and build web products and [INSERT SOMETHING ELSE HERE THAT IS FUNNY].</h1>
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
  min-height: 900px;
  height: 100vh;
  position: relative;
}

h1 {
  position: absolute;
  top: 47%;
  transform: translateY(-50%);
}
</style>