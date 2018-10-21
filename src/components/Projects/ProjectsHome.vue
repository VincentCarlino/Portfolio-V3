<template>
  <div>
      <h2>And here are some things I've helped <span class="red">build</span></h2>
      <ProjectHome :project="projects['mass-hike']" />
      <ProjectHome :project="projects['portfolio-v2']" />
  </div>
</template>

<script>
import ProjectData from '../../data/ProjectData'
import ProjectHome from './ProjectHome'

export default {
  // TODO: Refine this component so it matches the wireframes.
  name: 'Projects',
  props: ['projects'],
  components: {
    'ProjectHome': ProjectHome
  },
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
</style>
