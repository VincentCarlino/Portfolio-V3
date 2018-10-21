<template>
  <div class="home">
      <Intro
        foo="This is a prop"/>
      <Skills :skillsets="skillsets"/>
      <ProjectsHome :projects="projects" />
  </div>
</template>

<script>
import Intro from './Intro/Intro'
import Skills from './Skills/Skills'
import ProjectsHome from '../Projects/ProjectsHome'
import SkillData from '../../data/SkillData.js'
import ProjectData from '../../data/ProjectData.js'

export default {
  name: 'Home',
  components: {
    'Intro': Intro,
    'Skills': Skills,
    'ProjectsHome': ProjectsHome
  },
  data () {
    return {
      name: 'Vinny',
      other: 'do other things',
      projects: ProjectData,
      skillsets: SkillData
    }
  }
}
</script>

<style scoped>
</style>
