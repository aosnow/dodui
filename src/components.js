// ------------------------------------------------------------------------------
// name: components
// author: mudas( mschool.tech )
// created: 2019.07.15 上午 1:16
// ------------------------------------------------------------------------------

const Card = () => import('demo/demo-card');
const Layout = () => import('demo/demo-grid');

export default {
  card: { path: '/card', component: Card, beta: { title: '卡片', desc: '一般适用于卡片型内容区块' } },
  grid: { path: '/grid', component: Layout, beta: { title: '网格布局', desc: '适用于响应式布局' } }
};
