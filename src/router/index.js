import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import About from '@/views/about/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: '',
    path: '/',
    component: Layout,
    children: [
      {
        name: 'home',
        path: '',
        component: Home
      },
      {
        name: 'about',
        path: '/about',
        component: About
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
