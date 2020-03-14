import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home'
// import Lesson from '@/pages/lesson'
const Home = () => import('@/pages/home')
const Lesson = () => import('@/pages/lesson')
const Person = () => import('@/pages/person')
const LivingStart = () => import('@/pages/living_start')
const Living = () => import('@/pages/living')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: Lesson
    },
    {
      path: '/person/:id',
      name: 'person',
      component: Person
    },
    {
      path: '/livingStart',
      name: 'LivingStart',
      component: LivingStart
    },
    {
      path: '/Living',
      name: 'Living',
      component: Living
    }
  ]
})
