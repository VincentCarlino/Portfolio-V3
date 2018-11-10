// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Mockup from './components/Mockup'
import router from './router'
import Parallax from 'vue-parallaxy'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faWrench, faPaintRoller, faCheck, faCheckCircle, faCheckSquare, faHiking, faDesktop, faArrowRight, faArrowUp, faTerminal, faKey, faFile, faExternalLinkAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGrinBeam, faKeyboard } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
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
library.add(faHiking)
library.add(faArrowRight)
library.add(faArrowUp)
library.add(faGithub)
library.add(faCodepen)
library.add(faFile)
library.add(faExternalLinkAlt)
library.add(faHome)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  distance: '70%',
  origin: 'bottom',
  opacity: 0
});

Vue.component('Mockup', Mockup)
Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export default app
