import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Info from '@/components/index/Info'
import FindPwd from '@/components/index/FindPwd'
import Bangding from '@/components/index/Bangding'
import Login from '@/components/Login'
import Loginx from '@/components/login/Login'
import Register from '@/components/login/Register'
import ForgetPwd from '@/components/login/ForgetPwd'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Index,
    children: [{
      path: '/',
      name: 'Info',
      component: Info
    }, {
      path: '/index_findpwd',
      name: 'FindPwd',
      component: FindPwd
    }, {
      path: '/index_bangding',
      name: 'Bangding',
      component: Bangding
    }]
  }, {
    path: '/login',
    component: Login,
    children: [{
      path: '/',
      name: 'Loginx',
      component: Loginx
    }, {
      path: '/login_register',
      name: 'Register',
      component: Register
    }, {
      path: '/login_forget',
      name: 'ForgetPwd',
      component: ForgetPwd
    }]
  }]
})
