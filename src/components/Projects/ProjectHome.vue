<template>
  <div class="project">
    <div v-if="!swap" class="project-content left text">
      <h2>{{ project.name }}</h2>
      <h5>{{ project.start }} - {{ project.end }}</h5>
      <p>{{ project.tagline }}</p>
      <Button :link="project.to" text="see more"/>
    </div>
    <div class="images project-content">
      <Mockup :src="project.image"/>
    </div>
    <div v-if="swap" class="project-content right text">
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

<style lang="scss" scoped>

@mixin mobile {
  @media (max-width: 599px) { @content; }
}
@mixin tablet {
  @media (max-width: 1200px) { @content; }
}
.project {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;

  @include mobile {
    flex-direction: column;
  }

}

.project-content {
  flex: 1;


  @include mobile {
    padding: 0;
    padding-bottom: 30px;
  }
}

.images {
  flex: 8;
  order: 1;

  @include mobile {
    order: 0;
  }

}

.text {
  align-self: center;
  flex: 6;
  height: 100%;
  order: 1;

}

.left {
  text-align: right;
  padding-right: 20px;
  margin-right: 20px;
  border-right: solid 1px black;

  @include mobile {
    text-align: left;
    border: none;
  }
}

.right {
  padding-left: 20px;
  margin-left: 40px;
  text-align: left;
  border-left: solid 1px black;


  @include mobile {
    border: none;
    margin: 0;
  }
}
</style>
