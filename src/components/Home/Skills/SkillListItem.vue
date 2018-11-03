<template>
  <div class="skill-item">
    <p><span class="icon" ><font-awesome-icon icon="check" /></span>{{ skill }}</p>
  </div>
</template>

<script>

export default {
  name: 'SkillListItem',
  props: ['skill']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.skill-item {
    transform: translateX(-20px);
}

.icon {
    font-size: 15px;
    padding-right: 10px;
}

</style>
