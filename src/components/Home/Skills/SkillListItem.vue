<template>
  <div class="skill-item">
    <span class="icon" ><font-awesome-icon icon="check" /></span><p>{{ skill }}</p>
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
  display: flex;
  transform: translateX(-20px);
  align-items: center;
}

.icon {
    font-size: 15px;
    padding-right: 10px;
}

</style>
