<template>
  <div class="skill-column">
    <h4 class="underline column-title">{{ skillset.title }}</h4>
    <p v-for="skill in skillset.skills" v-bind:key="skill">{{ skill }}</p>
  </div>
</template>

<script>

export default {
  name: 'SkillColumn',
  props: ['skillset']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill-column {
  margin-top: 40px;
  padding-right: 60px;
}

</style>
