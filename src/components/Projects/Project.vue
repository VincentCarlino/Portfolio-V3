<template>
  <div class="bg home-bg">
    <div class="page-wrapper project-wrapper">
      <h1>{{ name }} </h1>
      <div class="images">
        <!-- Conditionally render the main images for the products -->
        <div class="desktop"><Mockup v-scroll-reveal='{ delay : 350 }' :src="image"/></div>
        <div class="mobile"><Mockup v-scroll-reveal='{ delay: 200 }' :src="mobile"/></div>
      </div>
      <div class="article">
        <div v-scroll-reveal class="content-left">
          <h2>{{ tagline }}</h2>
          <article-content :article="article" />
        </div>
        <div v-scroll-reveal='{delay : 250}' class="content-right">
          <ProjectSummary :skills="skills" :start="start" :end="end" :roles="roles" />
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
  props: ['project'],
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

.images {
  display: flex;
  margin-bottom: 60px;

  .desktop {
    flex: 3;
    margin-right: 20px;
  }

  .mobile {
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;
  }

  .logo {
    flex: 1;
    margin-left: 20px;
  }
}

.article {
  display:flex;
}

.content-left {
  flex: 2;
  margin-right: 30px;
}

.content-right {
  flex: 1;
  margin-left: 30px;
}
</style>
