import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '',
      name: 'todo',
      component: () => import('@/views/Todo.vue'),
      beforeEnter: async (to, from, next) => {
        await store.dispatch('fetchTodoList')
        next()
      },
    },
  ],
  mode: 'history',
  base: '/',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
})

// Global After Guards
router.afterEach(() => {
  NProgress.done()
})

export default router
