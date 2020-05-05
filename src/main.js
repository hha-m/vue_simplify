import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vue-datetime/dist/vue-datetime.css';

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './routes';
import Datetime from 'vue-datetime';

Vue.config.productionTip = false

Vue.use(Datetime);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
