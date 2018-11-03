<template>
  <div class="project">
    <div v-if="!swap" class="text project-content left" v-scroll-reveal="{ delay: 250}">
      <h2>{{ project.name }}</h2>
      <h5>{{ project.start }} - {{ project.end }}</h5>
      <p>{{ project.tagline }}</p>
      <Button :link="project.to" text="see more"/>
    </div>
    <div class="images project-content" v-scroll-reveal="{ delay: 350}">
      <Mockup :src="project.image"/>
    </div>
    <div v-if="swap" class="text project-content right" v-scroll-reveal="{ delay: 250}">
      <h2>{{ project.name }}</h2>
      <h5>{{ project.start }} - {{ project.end }}</h5>
      <p>{{ project.tagline }}</p>
      <Button :link="project.to" text="see more"/>
    </div>
  </div>

</template>

<script>
import ProjectData from '../../data/ProjectData'
import Button from '../Button'
import Mockup from '../Mockup'

export default {
  // TODO: Refine this component so it matches the wireframes.  User the order prop to determine where the subcomponents are place/how the text is aligned.
  name: 'Projects',
  props: {project: Object,
          swap: Boolean },
  components: {
    'Button': Button,
    'Mockup': Mockup
  },
}
</script>

<style scoped>
/* TODO: Style the project (add padding, mostly) */
.project {
  display: flex;
  margin-top: 100px;

}

.project-content {
  padding: 20px;
  flex: 1;
}

.images {
  flex: 8;
}

.text {
  align-self: center;
  flex: 6;
  height: 100%;
}

.left {
  text-align: right;
  border-right: solid 1px black;
}

.right {
  margin-left: 20px;
  text-align: left;
  border-left: solid 1px black;
}
</style>
