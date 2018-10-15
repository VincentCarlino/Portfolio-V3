<template>
    <div class="projects">
      This is a view of all of my projects.  Below should be all of the projects from ProjectData:
      <li v-for="project in projects">
        <router-link :to="{ name: 'Project', params: { FIGURE OUT DYNAMIC LINKS TO PROJECTS }}">{{ project.name }}</router-link>
      </li>
    </div>
</template>

<script>
import ProjectData from '../../data/ProjectData'

export default {
  name: 'Projects',
  data () {
      return {
          projects: ProjectData
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
