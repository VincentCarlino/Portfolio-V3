<template>
  <div class="skills" id="skills">
    <h2 class="skill-title" v-scroll-reveal>Here are some of my <span class="red">skills</span></h2>
    <div class="skillsets-wrapper">
      <div class="skillsets">
      <SkillColumn v-for="(skillset, index) in skillsets"
                  :skillset="skillset"
                  v-bind:key="skillset.title" v-scroll-reveal="{ delay: index * 100 }"></SkillColumn>
      </div>
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
@mixin tablet {
  @media (max-width: 1200px) {
    @content;
  }
}

@mixin mobile {
  @media (max-width: 599px) {
    @content;
  }
}

.skillsets{
  display: flex;
  flex: 2;

  @include mobile {
    flex-direction: column;
  }
}

.skill-title {
  flex: 1;
  margin-right: 20px;
}

.skillsets-wrapper {
  display: flex;
  justify-content: end;

  @include mobile {
    flex-direction: column;
  }
}

.offset {
  flex: 1
}

.skills {
  padding: 100px 0;

}

.icons {

  .icon {
    font-size: 30px;
  }
}

</style>
