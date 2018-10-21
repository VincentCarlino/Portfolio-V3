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

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

img {
  width: 100%;
  display: block;
}

h1 {
  font-family: 'Noto Serif', serif;
  font-weight: bold;
  font-size: 80px;
  margin: 0;
}

h2 {
  font-family: 'Noto Serif', serif;
  font-weight: bold;
  padding-bottom: 20px;
  font-size: 48px;
}

h3 {
  font-family: 'Noto Serif', serif;
  font-weight: bold;
  padding-bottom: 20px;
  font-size: 40px;
}

h4 {
  font-weight: bold;
  font-size: 35px;
}

p {
  font-size: 20px;
}

.red {
  color: $red;
}

.underline {
  text-decoration: underline;
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
  margin: 0 100px;
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
