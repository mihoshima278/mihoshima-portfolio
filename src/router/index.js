import Vue from 'vue'
import VueRouter from 'vue-router'
import BookIndex from '../pages/BookIndex'
import BookSearch from '../pages/BookSearch'
import BookEdit from '../pages/BookEdit'
import Top from '../components/Top'
import AboutMe from '../components/AboutMe'
import View from '../components/View'
import Skill from '../components/Skill'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookIndex',
    component: BookIndex
  },
  {
    path: '/search',
    name: 'BookSearch',
    component: BookSearch
  },  
  {
    path: '/edit/:id',
    name: 'BookEdit',
    component: BookEdit
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  },
  {
    path: '/AboutMe',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/View',
    name: 'View',
    component: View
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  }        
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
