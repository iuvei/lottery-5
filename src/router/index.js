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
    //find子页面
    {
      path: '/player/0',
      name: 'player',
      component: _import('find/player')
    },
    {
      path: '/player/1',
      name: 'player1',
      component: _import('find/player1')
    },
    {
      path: '/player/2',
      name: 'player2',
      component: _import('find/player2')
    },
    {
      path: '/player/3',
      name: 'player3',
      component: _import('find/player3')
    },
    {
      path: '/player/4',
      name: 'player4',
      component: _import('find/player4')
    },
    {
      path: '/player/5',
      name: 'player5',
      component: _import('find/player5')
    },
    {
      path: '/player/6',
      name: 'player6',
      component: _import('find/player6')
    },
    {
      path: '/player/7',
      name: 'player7',
      component: _import('find/player7')
    },
    {
      path: '/player/8',
      name: 'player8',
      component: _import('find/player8')
    },
    {
      path: '/player/9',
      name: 'player9',
      component: _import('find/player9')
    },
    {
      path: '/find',
      component: Layout,
      redirect: '/find/index',
      children: [{
        path: 'index',
        component: _import('find/find'),
        name: 'find'
      }]
    },
    {
      path: '/find-yesterday',
      component: Layout,
      redirect: '/find-yesterday',
      children: [{
        path: '',
        component: _import('find/find-yesterday'),
        name: 'findYesterday'
      }]
    },
    // {
    //   path: '/find-yesterday',
    //   component: Layout,
    //   children: [{
    //     path: 'index',
    //     component: _import('find/find-yesterday'),
    //     name: 'find-yeste`rday'
    //   }]
    // },
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
