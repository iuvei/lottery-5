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
		  path: '/ssc/:id',
		  name: 'ssc',
		  component: _import('lotteryHall/SSC')
	  },
	  {
		  path: '/syx5/:id',
		  name: 'syx5',
		  component: _import('lotteryHall/syx5')
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
    //activity子页面
    {
      path: '/upgrade/0',
      name: 'upgrade',
      component: _import('activity/upgrade')
    },
    {
      path: '/upgrade/1',
      name: 'daily2',
      component: _import('activity/daily2')
    },
    {
      path: '/upgrade/2',
      name: 'wechat3',
      component: _import('activity/wechat3')
    },
    {
      path: '/upgrade/3',
      name: 'credit4',
      component: _import('activity/credit4')
    },
    {
      path: '/upgrade/4',
      name: 'agent5',
      component: _import('activity/agent5')
    },
    {
      path: '/upgrade/5',
      name: 'recommend6',
      component: _import('activity/recommend6')
    },
    {
      path: '/upgrade/6',
      name: 'redpacket7',
      component: _import('activity/redpacket7')
    },
    {
      path: '/upgrade/7',
      name: 'wechattrans8',
      component: _import('activity/wechattrans8')
    },
    {
      path: '/upgrade/8',
      name: 'alipaytrans9',
      component: _import('activity/alipaytrans9')
    },
    {
      path: '/upgrade/9',
      name: 'mystery10',
      component: _import('activity/mystery10')
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
    // {
    //   path: '/find',
    //   component: Layout,
    //   redirect: '/find/index',
    //   children: [{
    //     path: 'index',
    //     component: _import('find/find'),
    //     name: 'find'
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
