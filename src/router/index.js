import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if fasle ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },

  {
    path: '/publish',
    name: 'publish',
    component: Layout,
    meta: {
      title: 'announce',
      icon: 'publish'
    },
    children: [
      { path: 'quickAdvice', component: _import('publish/quickAdvice'), name: 'quickAdvice', meta: { title: 'quickAdvice' }},
      { path: 'generalAdvice', component: _import('publish/generalAdvice'), name: 'generalAdvice', meta: { title: 'generalAdvice' }}
    ]
  },

  {
    path: '/ranking',
    component: Layout,
    children: [{ path: 'ranking', component: _import('table/ranking'), name: 'ranking', meta: { title: 'ranking', icon: 'rank' }}]
  },

  {
    path: '/news',
    component: Layout,
    children: [{ path: 'news', component: _import('list/news'), name: 'news', meta: { title: 'news', icon: 'message' }}]
  },

  {
    path: '/personal',
    name: 'personalData',
    component: Layout,
    meta: {
      title: 'personal',
      icon: 'people'
    },
    children: [
      { path: 'mycollect', component: _import('personal/mycollect'), name: 'mycollect', meta: { title: 'mycollect' }},
      { path: 'myComment', component: _import('personal/myComment'), name: 'myComment', meta: { title: 'myComment' }},
      { path: 'myPraise', component: _import('personal/myPraise'), name: 'myPraise', meta: { title: 'myPraise' }}
    ]
  },

  {
    path: '/myCircle',
    component: Layout,
    children: [{ path: 'myCircle', component: _import('my-world/myCircle'), name: 'myCircle', meta: { title: 'myCircle', icon: 'Cricle' }}]
  },

  {
    path: '/scoreShop',
    component: Layout,
    children: [{ path: 'scoreShop', component: _import('shop/scoreShop'), name: 'scoreShop', meta: { title: 'scoreShop', icon: 'shoppingCard' }}]
  },

  {
    path: '/adviseCount',
    component: Layout,
    children: [{ path: 'adviseCount', component: _import('opinions/adviseCount'), name: 'adviseCount', meta: { title: 'adviseCount', icon: 'total' }}]
  },

  {
    path: '/feedBack',
    component: Layout,
    // redirect: 'opinions/feedBack',
    children: [{ path: 'feedBack', component: _import('opinions/feedBack'), name: 'feedBack', meta: { title: 'feedBack', icon: 'back' }}]
  },

  {
    path: '/aboutEasy',
    component: Layout,
    children: [{ path: 'aboutEasy', component: _import('setting/aboutEasy'), name: 'aboutEasy', meta: { title: 'aboutEasy', icon: 'about' }}]
  },

  {
    path: '/advice_details',
    component: Layout,
    children: [{ name: 'advice_details', path: 'advice_details', component: _import('publish/adviceDetails'), meta: { title: 'advice_details' }}],
    hidden: true
  },

  {
    path: '/stepDetail',
    component: Layout,
    children: [{ name: 'stepDetail', path: 'stepDetail', component: _import('publish/stepDetail'), meta: { title: 'stepDetail' }}],
    hidden: true
  },

  {
    path: '/dealNews',
    component: Layout,
    children: [{ name: 'dealNews', path: 'dealNews', component: _import('list/dealNews'), meta: { title: 'dealNews' }}],
    hidden: true
  },

  { path: '*', redirect: '/404', hidden: true }
]
