// import { Message } from 'element-ui'
import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from './utils/auth.js' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress Configuration

const whiteList = ['/login']// no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() 
  if (getToken()) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/home' })
      NProgress.done()
    }else {
      next()
    }
  }else {

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next({path: `/login`})
      NProgress.done()
    }
  }

})

router.afterEach(() => {
  NProgress.done() 
})
