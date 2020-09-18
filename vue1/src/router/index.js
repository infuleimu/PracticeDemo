import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foo from '../components/foo/foo.vue'
import List from '../components/list/list.vue'
import Bar from '../components/bar/bar.vue'
import addHero from '../components/list/addHero.vue';
import modifyHero from '../components/list/modifyHero.vue'
import addWeapon from '../components/foo/addWeapon.vue'
import modifyWeapon from '../components/foo/modifyWeapon.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/heroes',
    name: 'heroes',
    component: List
  },
  {
    path: '/bar',
    name: 'bar',
    component: Bar
  },
  {
    path: '/foo',
    name: 'foo',
    component: Foo
  },
  {
    path: '/addWeapon',
    name: 'addWeapon',
    component: addWeapon
  },
  {
    path: '/modifyWeapon/:id',
    name: 'modifyWeapon',
    component: modifyWeapon
  },
  {
    path: '/addHero',
    name: 'addHero',
    component: addHero
  },
  {
    path: '/modifyHero/:id',
    name: 'modifyHero',
    component: modifyHero
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
