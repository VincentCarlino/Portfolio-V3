<template>
  <div id="summary">

      <h5>{{ start }} - {{ end }}</h5>
      <h4 class="underline">Skills</h4>
      <p>{{ skills }} {{ start }} {{ end }} {{ roles }}</p>
  </div>
</template>

<script>

export default {
  name: 'Projects',
  props: ['skills', 'start', 'end', 'roles'],
}
</script>

<style scoped>

#summary {
    margin-top: 40px;
    text-align: right;
}
</style>
