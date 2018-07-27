import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '../views/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/lotteryHall/index',
    },
    {
      path: '/login',
      name: 'Login',
      component: _import('login/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: _import('login/register')
    },
    {
      path: '/forgetPwd',
      name: 'forgetPwd',
      component: _import('login/forgetPwd')
    },
    {
      path: '/allLottery',
      name: 'allLottery',
      component: _import('lotteryHall/allLottery')
    },
    {
      path: '/lotteryHall',
      component: Layout,
      redirect: '/lotteryHall/index',
      children: [{
        path: 'index',
        component: _import('lotteryHall/lotteryHall'),
        name: 'lotteryHall'
      }]
    },
    {
      path: '/activity',
      component: Layout,
      redirect: '/activity/index',
      children: [{
        path: 'index',
        component: _import('activity/activity'),
        name: 'activity'
      }]
    },
    {
      path: '/home',
      component: Layout,
      redirect: '/home/index',
      children: [{
        path: 'index',
        component: _import('home/home'),
        name: 'home'
      }]
    }
  ]
})
