<template>
    <div :class="squircle ? 'container' : ''">
        <img :src="src" />
    </div>
</template>

<script>
export default {
  name: 'SquircleImage',
  props: {
    'src': String,
    'squircle': Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.container {
  width: auto;
  overflow: hidden;
  border-radius: 10px;
}

</style>