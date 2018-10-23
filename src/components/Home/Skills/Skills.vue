<template>
  <div class="skills" id="skills">
    <div class="skillsets">
      <h2 class="skill-title">Here are some of my <span class="red">skills</span></h2>
      <SkillColumn v-for="skillset in skillsets"
                  :skillset="skillset"
                  v-bind:key="skillset.title"></SkillColumn>

    </div>
  </div>
</template>

<script>
import SkillColumn from './SkillColumn'

export default {
  name: 'Home',
  props: ['skillsets'],
  components: {
    'SkillColumn': SkillColumn
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.skill-title {
  flex: 1;
  max-width: 500px;
}

.offset {
    flex: 1;
}

.skillsets {
    display: flex;
    justify-content: end;
    column-gap: 20px;
}

.skills {
    padding-bottom: 100px;
}

</style>
