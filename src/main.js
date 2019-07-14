import Vue from 'vue';
import RouterConf from './router/config';

import '@mudas/reset.css';
import 'dodui/theme/core.scss';
import 'dodui/theme/dodui-html.scss';

import App from './App';

Vue.config.productionTip = false;

new Vue({
  router: RouterConf,
  render: h => h(App)
}).$mount('#app');
