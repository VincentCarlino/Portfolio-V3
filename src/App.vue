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
$purple: #6634ff;
$dark-blue: #003479;
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

@mixin for-phone-only {
  @media (max-width: 599px) { @content; }
}
@mixin for-tablet-portrait-up {
  @media (min-width: 600px) { @content; }
}
@mixin for-tablet-landscape-up {
  @media (min-width: 900px) { @content; }
}
@mixin for-desktop-up {
  @media (min-width: 1200px) { @content; }
}
@mixin for-big-desktop-up {
  @media (min-width: 1800px) { @content; }
}


body {
  background-color: #fafafa;
  background: radial-gradient(rgba(246,73,66, .2) 13%, transparent 5%) 8px 9px;
	background-size: 22px 22px;
  background-attachment: fixed;
  margin: 0 150px;
  color: #444;

  @include for-phone-only {
    margin: 0 20px;
  }

}

img {
  width: 100%;
  display: block;
}

h1 {
  font-family: 'Circular', serif;
  letter-spacing: -2px !important;
  font-weight: 900;
  font-size: 90px;
  margin: 0;

  @include for-phone-only {
    font-size: 50px;
  }
}

h2 {
  font-family: 'Circular', serif;
  letter-spacing: -2px !important;
  font-weight: 900;
  padding-bottom: 20px;
  font-size: 46px;
}

h3 {
  font-family: 'Circular', serif;
  letter-spacing: -2px !important;
  font-weight: 900;
  padding-bottom: 5px;
  font-size: 40px;
}

h4 {
  font-family: 'Noto Serif';
  font-weight: bold;
  font-size: 35px;
}

h5 {
  font-family: 'Circular';
  font-size: 22px;
  margin-bottom: 5px;
}

p {
  font-family: 'Noto Serif';
  letter-spacing: -1px !important;
  font-weight: 400;
  font-size: 20px;
  padding-bottom: 5px;
}

.red {
  color: $red;
}

.underline {
  color: $red;
  text-decoration: underline;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity .5s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}

.icon {
  font-size: 80px;
  color: $red;

  @include for-phone-only {
    font-size: 40px;
  }

}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 40px;
  max-width: 1600px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
