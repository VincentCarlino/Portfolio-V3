<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Serif:400,700');

$red: rgb(246,73,66);
$red-transparent: rgba(246,73,66, .4);
$white: #F2F4F4;
// background values
$dot-size: 2px;
$dot-space: 12px;

h1 {
  font-family: 'Noto Serif', serif;
  font-weight: bold;
  font-size: 90px;
  margin: 0;
}

h2 {
  font-family: 'Noto Serif', serif;
  font-weight: bold;
}

.red {
  color: $red;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity .5s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}

body {
  background: radial-gradient(rgba(246,73,66, .4) 13%, transparent 5%) 8px 9px;
	background-size: 12px 12px;
  background-attachment: fixed;
  margin: 0 140px;
  height: 9000px;

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 40px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #272727;
}
</style>
