import Vue from 'vue'
import Router from 'vue-router'

import jQuery from 'jquery'
window.jQuery = jQuery;

import BootstrapVue from 'bootstrap-vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas);
library.add(fab);

import Index from "@/components/Index";
import Team from "@/components/Team";
import PushTx from "@/components/PushTx";

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/atmosd/pushtx',
      name: 'PushTx',
      component: PushTx
    }
  ]
});