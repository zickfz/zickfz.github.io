import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import projects from '@/components/projects'

Vue.use(VueAxios, axios)
Vue.use(Router)


const routes = [
  { path: '/', component: Hello },
  { path: '/projects', component: projects }
]

export default new Router({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
})
