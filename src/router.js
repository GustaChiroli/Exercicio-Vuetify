import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Tarefas',
      component: () => import('./views/Tarefas.vue')
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: () => import('./views/Sobre.vue')
    }
  ]
})
