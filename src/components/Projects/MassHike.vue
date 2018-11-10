<template>
  <div class="bg home-bg">
    <router-link class="nav red" to="/"><font-awesome-icon icon="arrow-left" /></router-link>
    <div class="page-wrapper project-wrapper">
      <h1>{{ name }} </h1>
      <div class="images">
        <div class="desktop"><Mockup v-scroll-reveal='{ delay : 350 }' :src="image"/></div>
        <div class="mobile"><Mockup v-scroll-reveal='{ delay: 200 }' :src="mobile"/></div>
        <div class="logo"><img v-scroll-reveal='{ delay: 100 }' :src="logo" alt=""></div>
      </div>
      <div class="article">
        <div v-scroll-reveal class="content-left">
          <article-content :article="article" :tagline="tagline"/>
        </div>
        <div v-scroll-reveal='{delay : 250}' class="content-right">
          <ProjectSummary :skills="skills" :start="start" :end="end" :roles="roles" :github="github" :link="link" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectData from '../../data/ProjectData'
import ProjectSummary from './ProjectSummary'
import ArticleContent from './ArticleContent'

export default {
  name: 'MassHike',
  components: {
    'ProjectSummary': ProjectSummary,
    'ArticleContent': ArticleContent
  },
  data () {
      return ProjectData['mass-hike']
  }
}
</script>

<style lang="scss">

$orange: #f05a28;
$yellow: #faaf3f;
$dark-green: #558959;
$light-green: #85aa5b;
$light-green-bg: rgba(133, 170, 91, 0.3);
$beige: #f7f4e8;

@mixin tablet {
  @media (max-width: 1200px) { @content; }
}

@mixin mobile {
  @media (max-width: 599px) { @content; }
}

.yellow {
  color: $yellow;
}

.images {
  display: flex;
  margin-bottom: 60px;

  @include mobile {
    margin-bottom: 20px;
  }

  .desktop {
    flex: 3;
    margin-right: 20px;

    @include mobile {
    margin-right: 0;
  }
  }

  .mobile {
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;

    @include tablet {
      display: none;
    }
  }

  .logo {
    flex: 1;
    margin-left: 20px;

    @include mobile {
      display: none;
    }
  }
}

.article {
  display:flex;

  @include mobile {
    flex-direction: column-reverse;
  }


}

.content-left {
  flex: 2;
  margin-right: 30px;
}

.content-right {
  flex: 1;
  margin-left: 30px;

  @include mobile {
    margin: 0;
  }
}

.mass-hike {
  padding: 120px 170px;
}

.mass-hike-bg {
  background: radial-gradient($light-green-bg 13%, transparent 2%) 8px 9px;
  background-color: $beige;
  background-size: 22px 22px;
  background-attachment: fixed;
  color: $dark-green;
}

</style>
