<template>
  <div class="skills" id="skills">
    <h2>Here are some of my <span class="red">skills</span></h2>
    <div class="skillsets">
        <div class="offset"></div>
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

.offset {
    flex: 1;
}

.skillsets {
    display: flex;
    justify-content: center;
    column-gap: 20px;
}

.skills {
    padding-bottom: 100px;
}

</style>
