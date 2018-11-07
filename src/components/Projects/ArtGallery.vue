<template>
  <div class="bg home-bg">
    <div class="page-wrapper project-wrapper">
      <h2>Here is a gallery of things I've <span class="red">drawn</span></h2>
      <div class="art">
        <div v-scroll-reveal='{ delay: index * 200 }' class="image" v-for="(image, index) in art">
          <img :src="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArtData from '../../data/ArtData'

export default {
  name: 'ArtGallery',
  data () {
      return {
          art: ArtData
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@mixin tablet {
  @media (max-width: 1200px) { @content; }
}

.art {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 150px;
  grid-auto-flow: dense;

}

.image {
    position: relative;
    grid-column-start: auto;
    grid-row-start: auto;
    grid-column: span 2;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}


</style>
