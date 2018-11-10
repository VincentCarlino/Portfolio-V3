<template>
    <div class="mockup-container">
        <div :class="'bubbles ' +  (bubbles ? bubbles : '') ">
            <div class="bubble bg-red">{{ red }}</div>
            <div class="bubble bg-yellow"></div>
            <div class="bubble bg-green"></div>
        </div>
        <img :src="src" />
    </div>
</template>

<script>
export default {
  name: 'Mockup',
  props: ['src', 'bubbles']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$red: rgb(246, 73, 66);
$yellow: rgb(255, 224, 102);
$green: rgb(140, 233, 154);
$gray: #343a40;


$mh-orange: #f05a28;
$mh-yellow: #faaf3f;
$mh-green: #558959;

@mixin mobile {
  @media (max-width: 599px) { @content; }
}

.mockup-container {
  width: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 10px 13px 0px 0px rgba(0, 0, 0, 0.14);
}

.bubble {
  height: 13px;
  width: 13px;
  background-color: white;
  margin: 0 4px;
  border-radius: 100%;

  @include mobile {
    height: 7px;
    width: 7px;
    margin: 0 2px;
  }


}

.bubbles {
  background-color: $gray;
  display: flex;
  padding: 12px 10px;

  @include mobile {
    padding: 9px 7px;
  }
}

.bg-red {
  background-color: $red;
}

.bg-yellow {
  background-color: $yellow;
}

.bg-green {
  background-color: $green;
}

.mass-hike {
  .bg-red {
      background-color: $mh-orange;
  }
  .bg-yellow {
      background-color: $mh-yellow;
  }
  .bg-green {
      background-color: $mh-green;
  }
}
</style>