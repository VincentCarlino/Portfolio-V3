<template>
  <div class="home">
      <Nav />
      <div class="content">
        <Intro
          foo="This is a prop"/>
        <Skills :skillsets="skillsets"/>
        <ProjectsHome :projects="projects" />
      </div>
  </div>
</template>

<script>
import Nav from '../Nav'
import Intro from './Intro/Intro'
import Skills from './Skills/Skills'
import ProjectsHome from '../Projects/ProjectsHome'
import SkillData from '../../data/SkillData.js'
import ProjectData from '../../data/ProjectData.js'

export default {
  name: 'Home',
  components: {
    'Nav': Nav,
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
.content {
  margin-left: 40px;
}
</style>
