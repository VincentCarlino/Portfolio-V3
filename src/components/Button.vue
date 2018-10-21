<template>
  <router-link :to="link">{{ text }}</router-link>
</template>

<script>
export default {
  name: 'Button',
  props: ['link', 'text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$red: rgb(246,73,66);
$white: #FFFFFF;

router-link, a {
  transition: all cubic-bezier(0.29, -0.02, 0, 1) .2s;
  text-transform: lowercase;
  transform: translateY(-10px);
  display: inline-block;
  text-decoration: none;
  color: $red;
  font-family: Noto Serif;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 20px;
  margin: 10px;
  background: $white;
  border: solid 2px $red;
  box-shadow: 0px 10px 0px 0px $red;

  &:active {
    transform: translateY(0px);
    box-shadow: 0px 0px 0px 0px $red;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>