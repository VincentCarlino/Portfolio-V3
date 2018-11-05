import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import About from '@/components/About'
import Projects from '@/components/Projects/Projects'
import Project from '@/components/Projects/Project'
import PageNotFound from '@/components/PageNotFound'
import MassHike from '@/components/Projects/MassHike'
import WebPortfolioV2 from '@/components/Projects/WebPortfolioV2'

import ProjectData from '../data/ProjectData'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Vinny Carlino // Web Engineer'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'Vinny Carlino // About Me'
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: {
        title: 'Vinny Carlino // Projects'
      }
    },
    {
      path: '/projects/mass-hike',
      name: 'Mass Hike',
      component: MassHike,
      meta: {
        title: 'Vinny Carlino // Mass Hike'
      }
    },
    {
      path: '/projects/portfolio-v2',
      name: 'Web Portfolio V2',
      component: WebPortfolioV2,
      meta: {
        title: 'Vinny Carlino // Web Portfolio V2'
      }
    },
    {
      path: '/projects/*',
      name: 'Project',
      component: Project,
      beforeEnter: (to, from, next) => {
        //Check if the project exists in project data, else 404
        function isValid(param) {
          return ProjectData[param]
        }

        if (!isValid(to.params.name)) {
          next({ name: '404' });
        }

        next();
      },
      meta: {
        title: 'Vinny Carlino // Project'
      }
    },
    {
      path: '*',
      name: '404',
      component: PageNotFound,
      meta: {
        title: 'Uh oh...'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => { //Prevents window position from being reset until after the page transition has run.
      setTimeout(() => { // TODO: Set a case where the user uses the back or forward buttons and keep the right page position.
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})

const DEFAULT_TITLE = 'Vinny Carlino // Web Engineer';
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router