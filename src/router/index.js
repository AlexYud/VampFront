import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Play.vue'
import Characters from '../views/Characters.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import Edit from '../views/Edit.vue'
import Lobby from '../views/Lobby.vue'
import Night from '../views/Night.vue'
import Loading from '../views/Loading.vue'
import End from '../views/End.vue'
import Morning from '../views/Morning.vue'
import Bonfire from '../views/Bonfire.vue'
import BonfireResult from '../views/BonfireResult.vue'
import Wait from '../views/Wait.vue'
import axios from 'axios'

function AdminAuth(to, from, next) {
  if (localStorage.getItem('token') != undefined) {

    var req = {
      headers: {
        authorization: "Bearer " + localStorage.getItem('token')
      }
    }

    axios.post("http://localhost:8686/validate", {}, req).then(res => {
      console.log(res)
      next()
    }).catch(err => {
      console.log(err.response)
      next("/login")
    })
  } else {
    next("/login")
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: Users,
    beforeEnter: AdminAuth
  },
  {
    path: '/admin/users/edit/:id',
    name: 'UserEdit',
    component: Edit,
    beforeEnter: AdminAuth
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/night',
    name: 'Night',
    component: Night
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/end',
    name: 'End',
    component: End
  },
  {
    path: '/morning',
    name: 'Morning',
    component: Morning
  },
  {
    path: '/bonfire',
    name: 'Bonfire',
    component: Bonfire
  },
  {
    path: '/bonfireResult',
    name: 'BonfireResult',
    component: BonfireResult
  },{
    path: '/wait',
    name: 'Wait',
    component: Wait
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router