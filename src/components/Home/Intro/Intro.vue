<template>
  <div class="intro">
      <h1>I'm <span class="red">{{ name }}</span>, a Boston-based web developer.  I design and build web products and my girlfriend likes to pop my pimples.</h1>
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