/*
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-04-09 15:34:01
 * @LastEditors: zml
 * @LastEditTime: 2020-04-09 15:40:27
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
