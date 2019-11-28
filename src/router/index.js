import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/html/login/index'
import LayOut from '@/html/layout/index'
import agentLayout from '@/html/layout/agentLayout'
import Home from '@/html/home/home'
import Recharge from '@/html/recharge/recharge'
import UserInfo from '@/html/userInfo/userInfo'
import Bill from '@/html/bill/bill'
import Invite from '@/html/invite/invite'
import Notice from '@/html/notice/notice'



Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}


export default new Router({
  mode: "hash",
  routes: [
    {
      path: '/login',
      name: 'login',
      title: '登录',
      meta: {
        subName: 'login',
      },
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      title: 'LayOut',
      meta: {
        subName: '/',
      },
      component: LayOut,
      children: [
        {
          path: '/home',
          name: 'home',
          title: '客户中心',
          meta: {
            subName: 'home',
          },
          component: Home,
        },
        {
          path: '/recharge',
          name: 'recharge',
          title: '充值',
          meta: {
            subName: 'recharge',
          },
          component: Recharge
        },
        {
          path: '/my',
          redirect: '/my',
          name: 'my',
          title: '我的',
          meta: {
            subName: 'my',
          },
          component: agentLayout,
          children: [
            {
              path: '/my/userInfo',
              name: 'userInfo',
              title: '个人信息',
              meta: {
                subName: 'my',
              },
              component: UserInfo
            },
            {
              path: '/my/bill',
              name: 'bill',
              title: '我的账单',
              meta: {
                subName: 'my',
              },
              component: Bill
            },
            {
              path: '/my/invite',
              name: 'invite',
              title: '邀请推广',
              meta: {
                subName: 'my',
              },
              component: Invite
            },
          ]
        },
        {
          path: '/notice',
          name: 'notice',
          title: '公告',
          meta: {
            subName: 'notice',
          },
          component: Notice
        },
        // {
        //   path: '/downLoad',
        //   name: 'downLoad',
        //   title: '下载',
        //   meta: {
        //     subName: 'downLoad',
        //   },
        //   component: LayOut
        // },
      ]
    },


  ]
})
