<template>
  <div class="intro" id="home">
    <div class="content">
      <h1>I'm <span class="red">Vinny</span>, a Boston-based developer.</h1>
      <h1>I build web products by blending code with fun visual design  <span class="icon"><font-awesome-icon :icon="['far', 'grin-beam']" /></span></h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss" scoped>

$red: rgb(246,73,66);

.icons {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.intro {
  display: flex;
  align-items: center;
  height: 100vh;
  min-height: 350px;
}

.content {
  max-width: 1480px;
}
</style>