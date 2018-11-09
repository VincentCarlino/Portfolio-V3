<template>
  <div id="summary">
      <h4 class="underline">Date</h4>
      <h5>{{ start }} - {{ end }}</h5>
      <h4 class="underline">Technology</h4>
      <p v-for="skill in skills">{{skill}} <font-awesome-icon icon="check" /></p>
      <h4 class="underline">Roles</h4>
      <p v-for="role in roles">{{role}} <font-awesome-icon icon="check" /></p>
  </div>
</template>

<script>

export default {
  name: 'Projects',
  props: ['skills', 'start', 'end', 'roles'],
}
</script>

<style lang="scss" scoped>

@mixin mobile {
  @media (max-width: 599px) { @content; }
}

#summary {
    border: solid;
    padding: 20px;
    margin-top: 10px;
    margin-left: 20px;
    position: sticky;
    top: 70px;

    @include mobile {
      margin: 0;
    }
}
</style>
