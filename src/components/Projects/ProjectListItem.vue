<template>
  <div class="project">
      <div class="image">
        <SquircleImage :src="project.image" />
      </div>
      <div class="text">
          <h3>{{ project.name }}</h3>
          <p>{{ project.tagline }}</p>
      </div>
      <Button v-if="project.link" :link="project.link" text="see more" />
  </div>
</template>

<script>
import Button from '../Button'
import SquircleImage from '../SquircleImage'

export default {
  name: 'Projects',
  props: ['project'],
  components: {
    'SquircleImage': SquircleImage,
    'Button': Button
  },
}
</script>

<style scoped>
</style>