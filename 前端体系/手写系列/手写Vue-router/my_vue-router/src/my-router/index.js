import Vue from 'vue'
import VueRouter from '../modules/my-router'

Vue.use(VueRouter)
const router = new VueRouter({
  
  routes: [
    // {
    //   path: '/',
    //   redirect:'/home'
    // },
    {
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
  ]
})
export default router
