import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import About from '@/components/About'
import Projects from '@/components/Projects/Projects'
import Project from '@/components/Projects/Project'
import PageNotFound from '@/components/PageNotFound'

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
      path:'/about',
      name:'About',
      component: About,
      meta: {
        title: 'Vinny Carlino // About Me'
      }
    },
    {
      path:'/projects',
      name:'Projects',
      component: Projects,
      meta: {
        title: 'Vinny Carlino // Projects'
      }
    },
    {
      path:'/projects/:name',
      name:'Project',
      component: Project,
      beforeEnter: (to, from, next) => {
        //Check if the project exists in project data, else 404
        function isValid (param) {
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
  ]
})

const DEFAULT_TITLE = 'Vinny Carlino // Web Engineer';
router.afterEach((to, from) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});

export default router