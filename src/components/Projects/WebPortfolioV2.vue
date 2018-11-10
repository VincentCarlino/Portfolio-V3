<template>
  <div class="bg home-bg">
    <div class="page-wrapper project-wrapper portfolio-v2">
      <h1 v-scroll-reveal>{{ name }} </h1>
      <div class="images">
        <div class="desktop"><Mockup v-scroll-reveal='{delay : 250}' :src="image"/></div>
      </div>
      <div class="article">
        <div v-scroll-reveal class="content-left">
          <h2>{{ tagline }}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque sequi ea doloribus voluptate doloremque quae facilis magnam. Eum quaerat nisi odio sit necessitatibus error numquam, et distinctio expedita suscipit ipsum culpa id. Voluptas minima officia harum possimus quae ullam ipsam repellendus reprehenderit sunt quasi repellat voluptate iste vero in nihil labore maiores minus fuga nisi, sapiente earum doloribus illo. Pariatur corrupti accusamus alias! Odio deleniti provident sequi possimus nulla, accusantium aut quaerat officia sint quos itaque enim maxime ratione ipsa aspernatur id eos laudantium nobis nemo iure consequuntur consequatur? A ipsa asperiores quos harum aut provident hic eius? Dicta magni nisi optio laborum tempore. Ad consequuntur quia incidunt dignissimos odit laborum nulla, accusamus dolores minima debitis! Tempora delectus nemo quod quo labore obcaecati aspernatur corrupti. Sint cumque repellendus aut accusantium et totam iusto! Sapiente aut consectetur voluptas praesentium dolor.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque sequi ea doloribus voluptate doloremque quae facilis magnam. Eum quaerat nisi odio sit necessitatibus error numquam, et distinctio expedita suscipit ipsum culpa id. Voluptas minima officia harum possimus quae ullam ipsam repellendus reprehenderit sunt quasi repellat voluptate iste vero in nihil labore maiores minus fuga nisi, sapiente earum doloribus illo. Pariatur corrupti accusamus alias! Odio deleniti provident sequi possimus nulla, accusantium aut quaerat officia sint quos itaque enim maxime ratione ipsa aspernatur id eos laudantium nobis nemo iure consequuntur consequatur? A ipsa asperiores quos harum aut provident hic eius? Dicta magni nisi optio laborum tempore. Ad consequuntur quia incidunt dignissimos odit laborum nulla, accusamus dolores minima debitis! Tempora delectus nemo quod quo labore obcaecati aspernatur corrupti. Sint cumque repellendus aut accusantium et totam iusto! Sapiente aut consectetur voluptas praesentium dolor.</p>
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

export default {
  name: 'WebPortfolioV2',
  components: {
    'ProjectSummary': ProjectSummary
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
}

.content-left {
  flex: 2;
  margin-right: 30px;
}

.content-right {
  flex: 1;
}

</style>
