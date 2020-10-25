import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Teachers from '../views/Teachers.vue'
import Students from '../views/Students.vue'
import Each from '../views/Each.vue'
import c404 from '../views/c404.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: Teachers
  },
  {
    path: '/students',
    name: 'students',
    component: Students
  },
  {
    path: '/single/:cat/:id',
    name: 'each',
    component: Each
  },
  {
    path: '*',
    component: c404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
