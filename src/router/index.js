import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import FindAHero from '../views/FindAHero.vue'
import Map from "../views/Map.vue"
import List from "../views/List.vue"
import Profile from "../views/Profile.vue"
import Help from "../views/Help.vue"
import WhoImHelping from "../views/WhoImHelping.vue"
import WhoIsHelpingMe from "../views/WhoIsHelpingMe.vue"
import Manifesto from "../views/Manifesto.vue"
import Settings from "../views/Settings.vue"
import Verify from "../views/Verify.vue"
import Forgot from "../views/Forgot.vue"
import Reset from "../views/Reset.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logout.vue')
  },
  {
    path: '/find-a-hero',
    name: 'findAHero',
    component: FindAHero
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/help/:id',
    name: 'Help',
    component: Help
  },
  {
    path: '/who-im-helping',
    name: 'WhoImHelping',
    component: WhoImHelping
  },
  {
    path: '/who-is-helping-me',
    name: 'WhoIsHelpingMe',
    component: WhoIsHelpingMe
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/manifesto',
    name: 'Manifesto',
    component: Manifesto
  },
  {
    path: '/verify/:token',
    name: 'Verify',
    component: Verify
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/reset/:token',
    name: 'Reset',
    component: Reset
  }
]

const router = new VueRouter({
  routes
})

export default router
