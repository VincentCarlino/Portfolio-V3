<template>
  <div id="summary">
      <h4 class="underline">Date</h4>
      <h5>{{ start }} - {{ end }}</h5>
      <h4 class="underline">Technology</h4>
      <h5 v-for="skill in skills">{{skill}} <font-awesome-icon icon="check" /></h5>
      <h4 class="underline">Roles</h4>
      <h5 v-for="role in roles">{{role}} <font-awesome-icon icon="check" /></h5>
      <div class="links">
      <a v-if="github" :href="github" target="blank"><font-awesome-icon class="link" :icon="['fab', 'github']" /></a>
      <a v-if="link" :href="link" target="blank"><font-awesome-icon class="link" :icon="['fas', 'external-link-alt']" /></a>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Projects',
  props: ['skills', 'start', 'end', 'roles', 'github', 'link'],
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
      margin-bottom: 20px;
    }
}

.link {
  font-size: 30px;
  margin-right: 10px;
}
</style>
