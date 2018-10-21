<template>
    <div class="mockup-container">
        <div class="bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
        </div>
        <img :src="src" />
    </div>
</template>

<script>
export default {
  name: 'Mockup',
  props: ['src'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$red: rgb(246,73,66);

.mockup-container {
    width: auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 33px 33px 0px 0px rgba(0,0,0,0.14);
}

.bubble {
    height: 15px;
    width: 15px;
    background-color: $red;
    margin: 0 5px;
    border-radius: 100%;
}

.bubbles {
    background-color: #e8e8e8;
    display: flex;
    padding: 15px 10px;
}


</style>