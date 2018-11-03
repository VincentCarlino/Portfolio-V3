// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Parallax from 'vue-parallaxy'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faWrench, faPaintRoller, faCheck, faCheckCircle, faCheckSquare, faDesktop, faTerminal, faKey } from '@fortawesome/free-solid-svg-icons'
import { faGrinBeam, faKeyboard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ScrollReveal from 'scrollreveal'
import VueScrollReveal from 'vue-scroll-reveal';


library.add(faCode)
library.add(faWrench)
library.add(faPaintRoller)
library.add(faCheck)
library.add(faCheckCircle)
library.add(faCheckSquare)
library.add(faDesktop)
library.add(faGrinBeam)
library.add(faTerminal)
library.add(faKeyboard)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  distance: '150%',
  origin: 'bottom',
  opacity: 0
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
