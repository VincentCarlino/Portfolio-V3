/*
  TODO:
    - Refactor art section to stack neatly
    - Make back button actually go back and not home
      - Also figure out how to have the back button as part of the route container
      - Could also probably just pull history into the back button on individual components
        - Conditionally set the route of the back button: If route: route, else: Home
    - Experiment with skill section more, it still looks kind of weird.
    - Add a resume icon to the links at the bottom right of the page
      - Additionally, experiment with hover tooltips on those links
    - Add images to article content
    - Make code look pretty
    - Experiment with loading states (Probably not necessary but could be good to learn)
      - If not page loading states, at least implement image loading states
*/
import Vue from 'vue'
import App from './App'
import Mockup from './components/Mockup'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faWrench, faPaintRoller, faCheck, faCheckCircle, faCheckSquare, faHiking, faDesktop, faArrowRight, faArrowUp, faArrowLeft, faTerminal, faKey, faFile, faExternalLinkAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGrinBeam, faKeyboard } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollReveal from 'vue-scroll-reveal';

// TODO: Make this not as ugly
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
library.add(faArrowLeft)
// End TODO

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
