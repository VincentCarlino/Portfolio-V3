<template>
  <div class="home-bg error">
    <h2 v-scroll-reveal='{ delay: 100 }'>Uh oh.  Looks like that page doesn't exist</h2>
    <div v-scroll-reveal='{ delay: 1000 }'><Button link="/" text="Let's take that from the top"/></div>
  </div>

</template>

<script>
import Button from './Button'

export default {
  name: '404',
  components: {
    'Button': Button
  }
}
</script>

<style scoped>
.error {
  text-align: center;
  height: 100vh;
  padding: 200px 0;

}
</style>
