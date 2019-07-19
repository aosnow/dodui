// ------------------------------------------------------------------------------
// name: components
// author: mudas( mschool.tech )
// created: 2019.07.15 上午 1:16
// ------------------------------------------------------------------------------

const Section = () => import('demo/demo-section');
const Layout = () => import('demo/demo-grid');

export default {
  section: { path: '/section', component: Section, beta: { title: '内容块', desc: '一般适用于移动端大型内容区块' } },
  layout: { path: '/grid', component: Layout, beta: { title: '网格布局', desc: '适用于响应式布局' } }
};
