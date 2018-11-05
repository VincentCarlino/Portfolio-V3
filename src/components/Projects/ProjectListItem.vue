<template>
  <div class="project">
    <router-link :to="project.to" class="project">
        <div class="image">
            <SquircleImage :src="project.image" />
        </div>
        <div class="text">
            <h3>{{ project.name }}</h3>
            <p>{{ project.tagline }}</p>
            <strong>{{ project.to }}</strong>
        </div>
        <Button v-if="project.link" :link="project.link" text="see more" />
    </router-link>
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

<style lang="scss" scoped>

$white: #fafafa;

.project {
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.14);
  background-color: white;
  border-radius: 10px;
  overflow: hidden;

}

.text {
    padding: 20px;
    background-color: $white;
}
</style>