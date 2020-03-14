import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home'
// import Lesson from '@/pages/lesson'
const Home = () => import('@/pages/home')
const Lesson = () => import('@/pages/lesson')
const Person = () => import('@/pages/person')
const LivingStart = () => import('@/pages/living_start')
const Living = () => import('@/pages/living')
const Teacher = () => import('@/pages/Teacher')
const TeacherLivingRoom = () => import('@/pages/TeacherLivingRoom')
const TeacherLesson = () => import('@/pages/TeacherLesson')
const TeacherAddLesson = () => import('@/pages/TeacherAddLesson')
const TeacherLessonDetail = () => import('@/pages/TeacherLessonDetail')

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      name: 'livingStart',
      component: LivingStart
    },
    {
      path: '/living',
      name: 'living',
      component: Living
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher,
      children: [
      ]
    },
    {
      path: '/teacher/livingRoom',
      name: '/teacher/livingRoom',
      component: TeacherLivingRoom
    },
    {
      path: '/teacher/lesson',
      name: '/teacher/lesson',
      component: TeacherLesson
    },
    {
      path: '/teacher/addlesson',
      name: '/teacher/addlesson',
      component: TeacherAddLesson
    },
    {
      path: '/teacher/lessonDetail',
      name: '/teacher/lessonDetail',
      component: TeacherLessonDetail
    }
  ]
})
