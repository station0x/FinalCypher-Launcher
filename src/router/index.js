// import { Vue } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
// import store from '../store'
// import CONSTANTS from '../../constants'

const Auth = () => import('../views/Auth.vue')
const Register = () => import('../views/Register.vue')
const FinalCypher = () => import('../views/games/FinalCypher.vue')
const Logo = () => import('../views/Logo.vue')
const Updater = () => import('../views/Updater.vue')

// Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: { name: 'FinalCypher' }},
  // { path: '*', redirect: { name: 'Auth' }},
  { path: '/finalcypher', component: FinalCypher, name: 'FinalCypher', meta: { requiresLogin: true } },
  { path: '/auth', component: Auth, name: 'Auth' },
  { path: '/register', component: Register, name: 'Register' },
  { path: '/logo', component: Logo, name: 'Logo' },
  { path: '/updater', component: Updater, name: 'Updater' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresLogin) && !window.localStorage.getItem('user')) next({ name: 'Auth' })
  // if(to.name != 'Register' && (store.state.candidateSignature || store.state.airdropCandidate)) {
  //   // clear candidate data from state and localstorage 
  //   store.dispatch('unregisterCandidate')
  //   store.dispatch('unregisterAirdropCandidate')
  //   next()
  // }
  // if()
  // else if(to.name == 'Lobby' && (!store.state.profile || store.state.profile.banned)) next({ name: 'Home' })
  else next()
})

// router.afterEach((to, from, next) => {
//   // Use next tick to handle router history correctly
//   // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
//   Vue.nextTick(() => {
//     if(to.name === 'Invitations') {
//       document.title = to.meta.title + to.params.project + TITLE;
//     } else {
//       document.title = to.meta.title + TITLE;
//     }
//   })
// })

export default router