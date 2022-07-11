import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JinglesBranding from '../views/JinglesBranding.vue'
import GetInTouch from '../views/GetInTouch.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/jingles-branding',
      name: 'jingles-branding',
      component: JinglesBranding
    },
    {
      path: '/get-in-touch',
      name: 'get-in-touch',
      component: GetInTouch
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  
  ]
});
export default router