<template>
  <div class="projects">
      This is one of my many projects: {{ project.name }}
      <Button :link="project.to" text="see more"/>
  </div>
</template>

<script>
import ProjectData from '../../data/ProjectData'
import Button from '../Button'

export default {
  name: 'Projects',
  props: ['project'], 
  components: {
    'Button': Button
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
