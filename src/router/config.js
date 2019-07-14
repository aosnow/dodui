// ------------------------------------------------------------------------------
// name: config
// author: mudas( mschool.tech )
// created: 2019.07.15 上午 0:44
// ------------------------------------------------------------------------------

import Vue from 'vue';
import VueRouter from 'vue-router';
import Components from '../components';

Vue.use(VueRouter);

const Guide = () => import('../../demo/guide');

const routes = [
  { path: '/', redirect: '/guide' },
  { path: '/guide', component: Guide, alias: '/index' }
];

// 循环 Components 配置，创建路由项目
Object.keys(Components).forEach(name => {
  const route = Components[name];
  route.name = name;
  routes.push(route);
});

const router = new VueRouter({
  routes
});

export default router;
