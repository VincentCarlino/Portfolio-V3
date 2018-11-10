<template>
  <div class="bg home-bg">
    <div class="page-wrapper project-wrapper">
      <h1>{{ name }} </h1>
      <div class="images">
        <!-- Conditionally render the main images for the products -->
        <div class="desktop"><Mockup v-scroll-reveal='{ delay : 350 }' :src="image"/></div>
        <div v-if="mobile" class="mobile"><Mockup v-scroll-reveal='{ delay: 200 }' :src="mobile"/></div>
      </div>
      <div class="article">
        <div v-scroll-reveal class="content-left">
          <h2>{{ tagline }}</h2>
          <article-content :article="article" />
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
import ArticleContent from './ArticleContent'
import ProjectSummary from './ProjectSummary'

export default {
  name: 'Projects',
  components: {
    'ProjectSummary': ProjectSummary,
    'ArticleContent': ArticleContent
  },
  data () {
      return ProjectData[this.$route.params.name]
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
