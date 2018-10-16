<template>
  <div class="projects">
      This is one of my many projects: {{ project.name }}
      <router-link :to="project.to">Link to project</router-link>
  </div>
</template>

<script>
import ProjectData from '../../data/ProjectData'

export default {
  name: 'Projects',
  props: ['project']
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
