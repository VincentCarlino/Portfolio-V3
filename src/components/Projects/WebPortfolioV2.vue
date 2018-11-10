<template>
  <div class="bg home-bg">
    <router-link class="nav red" to="/"><font-awesome-icon icon="arrow-left" /></router-link>
    <div class="page-wrapper project-wrapper portfolio-v2">
      <h1 v-scroll-reveal>{{ name }} </h1>
      <div class="images">
        <div class="desktop"><Mockup v-scroll-reveal='{delay : 250}' :src="image"/></div>
      </div>
      <div class="article">
        <div v-scroll-reveal class="content-left">
          <article-content :article="article" :tagline="tagline"/>
        </div>
        <div v-scroll-reveal='{delay : 250}' class="content-right">
          <ProjectSummary :skills="skills" :start="start" :end="end" :roles="roles" :github="github" :link="link"/>
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
  name: 'WebPortfolioV2',
  components: {
    'ProjectSummary': ProjectSummary,
    'ArticleContent': ArticleContent
  },
  data () {
      return ProjectData['portfolio-v2']
  }
}
</script>

<style lang="scss" scoped>

@mixin mobile {
  @media (max-width: 599px) { @content; }
}

@mixin tablet {
  @media (max-width: 1200px) { @content; }
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
}

</style>
