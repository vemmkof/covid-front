import Vue from 'vue'
import VueRouter from 'vue-router'
import { checkToken } from '@/scripts/api/oauth-api.js'
import { setData, removeData } from '@/scripts/helper/cookie-helper.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'catchAll',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    }
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('../views/Quiz.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('../views/Statistics.vue'),
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const toLogin = () => {
  removeData()
  window.location.href = '/'
}

const validate = (to, next) => {
  checkToken()
    .then(result => {
      const role = setData(result.data)
      if (to.matched.some(record => record.meta.requiresAdmin)) {
        role === 'ADMIN' ? next() : toLogin()
      } else {
        next();
      }
    })
    .catch(() => {
      toLogin()
    })

}

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    validate(to, next)
  } else {
    next();
  }

});

export default router
