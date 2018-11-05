<template>
  <div class="intro" id="home">
    <div class="content">
      <h1>I'm <span class="red">{{ name }}</span>, a Boston-based developer.</h1>
      <h1>I build web products and I love to make fun user interfaces <span class="icon"><font-awesome-icon :icon="['far', 'grin-beam']" /></span></h1>
      </div>
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

$red: rgb(246,73,66);

.intro {
  padding: 12.5% 0;
}

.content {
  max-width: 1480px;
}
</style>