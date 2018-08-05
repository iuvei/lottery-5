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
      path: '/k3/:id',
      name: 'k3',
      component: _import('lotteryHall/K3')
    },
	  {
		  path: '/SSC/:id',
		  name: 'SSC',
		  component: _import('lotteryHall/SSC')
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
    },
    {
      path: '/recharge',
      component: _import('home/recharge'),
      name: 'recharge'
    },
    {
      path: '/transRecord',
      component: _import('home/transRecord'),
      name: 'transRecord'
    },
    {
      path: '/noteRecord',
      component: _import('home/noteRecord'),
      name: 'noteRecord'
    },
    {
      path: '/userInfo',
      component: _import('home/userInfo'),
      name: 'userInfo'
    },
    {
      path: '/safeCenter',
      component: _import('home/safeCenter'),
      name: 'safeCenter'
    },
    {
      path: '/agentCenter',
      component: _import('home/agentCenter'),
      name: 'agentCenter'
    },
    {
      path: '/todayProfitLoss',
      component: _import('home/todayProfitLoss'),
      name: 'todayProfitLoss'
    },
    {
      path: '/myMessage',
      component: _import('home/myMessage'),
      name: 'myMessage'
    }
  ]
})
