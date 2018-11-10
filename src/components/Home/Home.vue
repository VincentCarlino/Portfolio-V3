<template>
  <div class="bg home-bg">
    <div class="page-wrapper">
      <Intro v-scroll-reveal/>
      <Skills :skillsets="skillsets"/>
      <ProjectsHome :projects="projects" />
    </div>
    <div class="external red">
        <a href="https://github.com/VincentCarlino" target="blank"><font-awesome-icon class="link" :icon="['fab', 'github']" /></a>
        <a href="https://codepen.io/vincentcarlino/" target="blank"><font-awesome-icon class="link" :icon="['fab', 'codepen']" /></a>
      </div>
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

<style lang="scss" scoped>

@mixin mobile {
  @media (max-width: 599px) { @content; }
}

@mixin tablet {
  @media (max-width: 1200px) { @content; }
}

.external {
  position: fixed;
  bottom: 20px;
  right: 30px;
  font-size: 35px;
  display: flex;
  flex-direction: column;

  @include tablet {
    bottom: 10px;
    right: 15px;
  }

  @include mobile {
    font-size: 25px;
  }
}

.page-wrapper {

  @include tablet {
    padding-right: 70px;
  }

  @include mobile {
    padding-right: 50px;
  }


}


</style>
