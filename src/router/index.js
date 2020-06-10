import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/mainpage.vue'
import news from '../views/news.vue'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import Call from '../views/call'
import Sirniki from '../views/sirniki'
import Spagetti from '../views/spagetti'
import Blini from '../views/blini'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/news',
    name: 'news',
    component: news
  },
  {
    path: '/mainpage',
    name: 'main',
    component: MainPage
  }, 
  {
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/register',
    name: 'Register',
    component: Register
},
{
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
},
{
  path: '/call',
  name: 'call',
  component: Call
},
{
  path: '/sirniki',
  name: 'sirniki',
  component: Sirniki
},
{
  path: '/spagetti',
  name: 'spagetti',
  component: Spagetti
},
{
  path: '/blini',
  name: 'blini',
  component: Blini
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
