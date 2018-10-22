<template>
    <div id="nav">
      <font-awesome-icon icon="home" nav class="nav-item fas fa-home" href="#home"></font-awesome-icon>
      <i nav class="nav-item fas fa-list-ul" href="#skills"></i>
      <i nav class="nav-item far fa-keyboard" href="#projects"></i>
      <i nav class="nav-item far fa-laugh-wink" href="#about"></i>
    </div>
</template>

<script>
var $ = require('jQuery');

function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 400);
  }
  $('[nav]').on('click', scrollToSection);

export default {
    name: 'Nav'
}
</script>

<style lang="scss" scoped>

$white: #F2F4F4;
$red: rgb(246,73,66);

#nav {
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: $white;
  border: solid 1px #A5A5A5;
  max-width: 30px;
  text-align: center;
  box-shadow: 2px 10px 3px 0px #a3a3a3;
}

.nav-item {
  color: $red;
  font-size: 28px;
  margin-bottom: 20px;

}

</style>

