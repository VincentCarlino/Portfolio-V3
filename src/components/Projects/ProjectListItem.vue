<template>
  <div class="project">
        <div class="image">
            <SquircleImage :src="project.image" />
        </div>
        <div class="text">
            <h3>{{ project.name }}</h3>
            <p>{{ project.tagline }}</p>
            <div class="tags">
                <h5 class="tag" v-for="skill in project.skills">{{skill}}</h5>
            </div>
            <router-link :to="project.to" class="project-link"><font-awesome-icon icon="arrow-right" /></router-link>
        </div>
  </div>
</template>

<script>
import Button from '../Button'
import SquircleImage from '../SquircleImage'

export default {
  name: 'Projects',
  props: ['project'],
  components: {
    'SquircleImage': SquircleImage,
    'Button': Button
  },
}
</script>

<style lang="scss" scoped>

$red: rgb(246,73,66);
$white: #fafafa;

.tag {
    border: solid 2px;
    padding: 0 10px;
    margin-right: 10px;
    border-radius: 10px;
    color: $red;
}

.tags {
    margin-top: 20px;
    display: flex;
}

.project {
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.14);
  background-color: $white;
  border-radius: 10px;
  overflow: hidden;

}

.project-link {
    float: right;
    font-size: 32px;
    padding: 10px 0;
}

.text {
    padding: 20px;
    background-color: $white;
}
</style>