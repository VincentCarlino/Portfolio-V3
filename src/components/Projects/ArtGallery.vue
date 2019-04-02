<template>
  <div class="bg home-bg">
    <router-link class="nav red" to="/"><font-awesome-icon icon="arrow-left" /></router-link>
    <div class="page-wrapper project-wrapper">
      <h2>Here is a gallery of things I've <span class="red">drawn</span></h2>
      <div class="art">
        <div v-scroll-reveal='{ delay: index * 200 }' class="image" v-for="(image, index) in art">
          <a :href="image"><img :src="image"/></a>
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 250px 150px;

}

.image {
    position: relative;
    box-shadow: 10px 13px 0px 0px rgba(0, 0, 0, 0.14);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: 480px) {
      &:nth-child(5n){
        grid-area: span 2 / span 2;
      }

      &:nth-child(3n) {
        grid-row: span 2;
      }
    }
}


</style>
