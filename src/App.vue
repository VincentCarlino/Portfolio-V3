<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// TODO: Make entire site mobile-friendly
export default {
  name: 'App',
  methods: {
    afterLeave () {
      this.$root.$emit('triggerScroll');
    },
    handleNav() {

    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Serif:400,700');

$red: rgb(246,73,66);
$purple: #6634ff;
$dark-blue: #003479;
$red-transparent: rgba(246,73,66, .4);
$white: #fafafa;
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

a {
  text-decoration: none;
  color: inherit;
}


@mixin mobile {
  @media (max-width: 599px) { @content; }
}
@mixin tablet {
  @media (max-width: 1200px) { @content; }
}

.nav {
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 35px;
  height: 0;

  @include tablet {
    font-size: 25px;
    top: 10px;
    left: 10px;
  }

  @include mobile {
    display: none;
    position: absolute;
  }
}

.page-wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 0 150px;
  padding-bottom: 50px;

  @include tablet {
    padding: 0 50px;
    padding-bottom: 50px;
  }

    @include mobile {
    padding: 0 10px;
    padding-bottom: 50px;
  }
}

.project-wrapper {
  padding-top: 40px;
}

img {
  width: 100%;
  display: block;
}

h1 {
  font-family: 'Circular', serif;
  letter-spacing: -2px !important;
  font-weight: 900;
  font-size: 72px;
  margin: 0;

  @include tablet {
    font-size: 60px;
  }

  @include mobile {
    font-size: 50px;
  }
}

h2 {
  font-family: 'Circular', serif;
  letter-spacing: -2px !important;
  font-weight: 900;
  padding-bottom: 20px;
  font-size: 46px;

  @include tablet {
    font-size: 40px;
  }

  @include mobile {
    font-size: 36px;
  }
}

h3 {
  font-family: 'Circular', serif;
  letter-spacing: -2px !important;
  font-weight: 900;
  padding-bottom: 5px;
  font-size: 40px;

  @include tablet {
    font-size: 28px;
  }

  @include mobile {
    font-size: 24px;
  }
}

h4 {
  font-family: 'Noto Serif';
  font-weight: bold;
  font-size: 32px;

  @include tablet {
    font-size: 28px;
  }

  @include mobile {
    font-size: 20px;
  }
}

h5 {
  font-family: 'Circular';
  font-size: 22px;
  margin-bottom: 5px;

  @include mobile {
    font-size: 18px;
  }
}

p {
  font-family: 'Noto Serif';
  font-weight: 400;
  font-size: 22px;
  padding-bottom: 5px;

  @include mobile {
    font-size: 20px;
  }
}

.red {
  color: $red;
}

.underline {
  text-decoration: underline;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 1s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.icon {
  font-size: 55px;
  color: $red;

  @include mobile {
    font-size: 40px;
  }

}

.bg {
  min-height: 100vh;
}


.blog-bg {
  background-color: $white;
}

.home-bg {
  background: radial-gradient(rgba(246, 73, 66, 0.2) 13%, transparent 5%) 8px
    9px;
  background-color: $white;
  background-size: 22px 22px;
  background-attachment: fixed;
  color: #333;
}

</style>
