<template>
    <div class="container">
        <img :src="src" />
    </div>
</template>

<script>
export default {
  name: 'SquircleImage',
  props: ['src']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.container {
  width: auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.14);
}

</style>