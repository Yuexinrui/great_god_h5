import Vue from 'vue'
import App from './index.vue'
import vant from 'vant';
// 你也可以使用自己的主题
import 'vant/lib/index.css';

import 'amfe-flexible'

Vue.use(vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
