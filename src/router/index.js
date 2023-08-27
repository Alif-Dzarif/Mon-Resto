import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import FavoritePage from '../views/FavoritePage.vue'
import DetailPage from '../views/DetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/detail-cuisine/:id',
      name: 'detail-cuisine',
      component: DetailPage
    },
    {
      path: '/favorites-user',
      name: 'favorites',
      component: FavoritePage
    },
  ]
})


router.beforeEach((to, from, next) => {
  if (to.name === 'favorites' && !localStorage.access_token) next('/login')
  else if (to.name === 'login' && localStorage.access_token) next('/')
  else if (to.name === 'register' && localStorage.access_token) next('/')
  else next()
})

export default router
