<template>
  <div class="skills" id="skills">
    <div class="skillsets">
      <h2 class="skill-title" v-scroll-reveal>Here are some of my <span class="red">skills</span></h2>
      <SkillColumn v-for="(skillset, index) in skillsets"
                  :skillset="skillset"
                  v-bind:key="skillset.title" v-scroll-reveal="{ delay: index * 100 }"></SkillColumn>

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

<style scoped lang="scss">
@mixin for-phone-only {
  @media (max-width: 599px) {
    @content;
  }
}

.skill-title {
  flex: 4;
  margin-right: 20px;
}

.offset {
  flex: 1;
}

.skillsets {
  display: flex;
  justify-content: end;

  @include for-phone-only {
    flex-direction: column;
  }
}

.skills {
  padding: 100px 0;
}
</style>
