// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/common.css'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let userinfo = sessionStorage.getItem('userinfo')
  if (userinfo) {
    next()
  } else {
    if (to.path == '/login_register' || to.path == '/login_forget' || to.path == '/login') { /* eslint-disable-line */
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
