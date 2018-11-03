<template>
  <div id="projects">
      <h2>And here are some things I've helped <span class="red">build</span></h2>
      <ProjectHome :project="projects['mass-hike']" />
      <ProjectHome :project="projects['portfolio-v2']" swap />
      <Button link='/projects' text='More projects' />
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
</style>
