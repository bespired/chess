import Vue from 'vue';
import App from './App.vue';
import store from './store';
import style from './scss/app.scss';

Vue.config.productionTip = false;

new Vue({
  style,
  store,
  render: h => h(App)
}).$mount('#app')