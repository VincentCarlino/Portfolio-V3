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

.mockup-container {
  width: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 33px 33px 0px 0px rgba(0, 0, 0, 0.14);
}

.bubble {
  height: 15px;
  width: 15px;
  background-color: white;
  margin: 0 5px;
  border-radius: 100%;
}

.bubbles {
  background-color: $gray;
  display: flex;
  padding: 15px 10px;
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