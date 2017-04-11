import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('@/page/index/index')), 'index')
const about = r => require.ensure([], () => r(require('@/page/about/about')), 'about')
const introduce = r => require.ensure([], () => r(require('@/page/introduce/introduce')), 'introduce')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
      {
          path: '/introduce',
          name: 'introduce',
          component: introduce
      }
  ]
})
