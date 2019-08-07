import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: layout,
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          components: {
            default: () => import('@/components/dashboard.vue')
          }
        },
        {
          path: 'heroes',
          name: 'heroes',
          components: {
            default: () => import('@/components/heroes.vue')
          }
        },
        {
          path: 'detail/:id',
          name: 'detail',
          props: { default: true },
          components: {
            default: () => import('@/components/detail.vue')
          }
        }
      ]
    }
  ]
})
