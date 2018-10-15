<template>
  <div class="home">
      <Intro 
        foo="This is a prop"/>
      <Skills />
  </div>
</template>

<script>
import Intro from './Intro/Intro'

export default {
  name: 'Home',
  components: {
    'Intro': Intro
  },
  data () {
    return {
      name: 'Vinny',
      other: 'do other things'
    }
  }
}
</script>

<style scoped>
</style>
