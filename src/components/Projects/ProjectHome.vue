<template>
  <div class="project">
    <div class="text project-content">
      <h3>{{ project.name }}</h3>
      <p>{{ project.tagline }}</p>
      <Button :link="project.to" text="see more"/>
    </div>
    <div class="images project-content">
      <Mockup :src="project.image"/>
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
  props: ['project', 'order'],
  components: {
    'Button': Button,
    'Mockup': Mockup
  },
}
</script>

<style scoped>

.project {
  display: flex;
  margin-bottom: 140px;

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
  text-align: right;
  flex: 6;
  border-right: solid 1px black;
  height: 100%;
}
</style>
