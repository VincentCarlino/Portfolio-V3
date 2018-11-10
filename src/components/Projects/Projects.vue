<template>
  <div class="bg home-bg">
    <router-link class="nav red" to="/"><font-awesome-icon icon="home" /></router-link>
    <div class="page-wrapper project-wrapper">
      <h2>Here is a list of all the things I've helped <span class="red">make</span></h2>
      <div class="projects">
        <div v-scroll-reveal class="item" v-for="project in projects" v-bind="project.name">
          <ProjectListItem :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectData from '../../data/ProjectData'
import ProjectListItem from './ProjectListItem'

export default {
  name: 'Projects',
  components: {
    'ProjectListItem': ProjectListItem
  },
  data () {
      return {
          projects: ProjectData
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@mixin tablet {
  @media (max-width: 1200px) { @content; }
}

.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @include tablet {
    grid-template-columns: 1fr;
  }

}
</style>
