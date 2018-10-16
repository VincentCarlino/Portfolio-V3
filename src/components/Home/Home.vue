<template>
  <div class="home">
      <Intro 
        foo="This is a prop"/>
      <Skills />
      <ProjectHome :project="projects['mass-hike']" />
      <ProjectHome :project="projects['portfolio-v2']" />
  </div>
</template>

<script>
import Intro from './Intro/Intro'
import Skills from './Skills/Skills'
import ProjectHome from '../Projects/ProjectHome'
import ProjectData from '../../data/ProjectData.js'

export default {
  name: 'Home',
  components: {
    'Intro': Intro,
    'ProjectHome': ProjectHome
  },
  data () {
    return {
      name: 'Vinny',
      other: 'do other things',
      projects: ProjectData
    }
  }
}
</script>

<style scoped>
</style>
