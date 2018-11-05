<template>
  <div id="projects">
    <h2 v-scroll-reveal>And here are some things I've helped <span class="red">build</span></h2>
    <ProjectHome  v-scroll-reveal :project="projects['mass-hike']" />
    <ProjectHome  v-scroll-reveal :project="projects['portfolio-v2']" swap />
    <Button class="more" link='/projects' text='More projects' />
  </div>
</template>

<script>
import ProjectData from '../../data/ProjectData'
import ProjectHome from './ProjectHome'
import Button from '../Button'

export default {
  name: 'Projects',
  props: ['projects'],
  components: {
    'ProjectHome': ProjectHome,
    'Button': Button
  },
}
</script>

<style scoped>
.more {
  margin-top: 60px;
}
</style>
