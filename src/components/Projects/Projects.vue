<template>
  <div class="bg home-bg">
    <div class="page-wrapper">
      <div class="projects">
        <div class="item" v-for="project in projects" v-bind="project.name">
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
<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
}
</style>
