import Vue from 'vue';

import '@mudas/reset.css';
import 'dodui/theme/core.scss';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
