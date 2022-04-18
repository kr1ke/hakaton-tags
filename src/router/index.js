import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHeader from '../layouts/app-header.vue'
import LoginHeader from '../layouts/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
    meta: {
      layout: AppHeader
    },
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth.vue'),
    meta: {
      layout: AppHeader
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin-panel.vue'),
    meta: {
      layout: LoginHeader
    },
  }
]

const router = new VueRouter({
  routes
})

// проверка токена при каждом перехоже на роут в котором нужна аворизация
router.beforeEach((to, from, next) => {
  if (to.name === "admin") {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      router.push("/auth",);
    }
  } else next();
});

export default router
