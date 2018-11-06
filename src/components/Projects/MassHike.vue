<template>
  <div class="bg mass-hike-bg">
    <div class="page-wrapper mass-hike">
      <h1>{{ name }} </h1>
      <div class="images">
        <div class="desktop"><Mockup v-scroll-reveal='{ delay : 350 }' :src="image"/></div>
        <div class="mobile"><Mockup v-scroll-reveal='{ delay: 200 }' :src="mobile"/></div>
        <div class="logo"><img v-scroll-reveal='{ delay: 100 }' :src="logo" alt=""></div>
      </div>
      <div class="article">
        <div v-scroll-reveal class="content-left">
          <h2>{{ tagline }}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque sequi ea doloribus voluptate doloremque quae facilis magnam. Eum quaerat nisi odio sit necessitatibus error numquam, et distinctio expedita suscipit ipsum culpa id. Voluptas minima officia harum possimus quae ullam ipsam repellendus reprehenderit sunt quasi repellat voluptate iste vero in nihil labore maiores minus fuga nisi, sapiente earum doloribus illo. Pariatur corrupti accusamus alias! Odio deleniti provident sequi possimus nulla, accusantium aut quaerat officia sint quos itaque enim maxime ratione ipsa aspernatur id eos laudantium nobis nemo iure consequuntur consequatur? A ipsa asperiores quos harum aut provident hic eius? Dicta magni nisi optio laborum tempore. Ad consequuntur quia incidunt dignissimos odit laborum nulla, accusamus dolores minima debitis! Tempora delectus nemo quod quo labore obcaecati aspernatur corrupti. Sint cumque repellendus aut accusantium et totam iusto! Sapiente aut consectetur voluptas praesentium dolor.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque sequi ea doloribus voluptate doloremque quae facilis magnam. Eum quaerat nisi odio sit necessitatibus error numquam, et distinctio expedita suscipit ipsum culpa id. Voluptas minima officia harum possimus quae ullam ipsam repellendus reprehenderit sunt quasi repellat voluptate iste vero in nihil labore maiores minus fuga nisi, sapiente earum doloribus illo. Pariatur corrupti accusamus alias! Odio deleniti provident sequi possimus nulla, accusantium aut quaerat officia sint quos itaque enim maxime ratione ipsa aspernatur id eos laudantium nobis nemo iure consequuntur consequatur? A ipsa asperiores quos harum aut provident hic eius? Dicta magni nisi optio laborum tempore. Ad consequuntur quia incidunt dignissimos odit laborum nulla, accusamus dolores minima debitis! Tempora delectus nemo quod quo labore obcaecati aspernatur corrupti. Sint cumque repellendus aut accusantium et totam iusto! Sapiente aut consectetur voluptas praesentium dolor.</p>
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
import ProjectSummary from './ProjectSummary'

export default {
  name: 'MassHike',
  components: {
    'ProjectSummary': ProjectSummary
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

.yellow {
  color: $yellow;
}

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
