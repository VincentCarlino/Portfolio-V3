<template>
  <div class="skill-column">
    <h4 class="red column-title underline">{{ skillset.title }}<span class="icon"><font-awesome-icon :icon="skillset.icon"/></span></h4>
    <SkillListItem v-for="skill in skillset.skills" :key="skill" :skill="skill"></SkillListItem>
  </div>
</template>

<script>
import SkillListItem from './SkillListItem'

export default {
  name: 'Home',
  props: ['skillset'],
  components: {
    'SkillListItem': SkillListItem
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">

@mixin mobile {
  @media (max-width: 599px) { @content; }
}

.icon {
  font-size: 25px;
  padding-left: 10px;
}

.skill-column {
  flex: 1;
  margin-right: 20px;

  @include mobile {
    margin-left: 20px;
  }
}

.column-title {
  padding: 0 10px;
  width: fit-content;
  margin-bottom: 10px;
}

</style>
