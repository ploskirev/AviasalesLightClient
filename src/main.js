import Vue from 'vue';
import requestPlugin from './services/requestSender';
import citiesFilter from './filters/cities';
import stopsFilter from './filters/stops';
import currencyFilter from './filters/currencyFilter';
import timeFilter from './filters/timeFilter';
import durationFilter from './filters/durationFilter';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.filter('citiesFilter', citiesFilter);
Vue.filter('stopsFilter', stopsFilter);
Vue.filter('currencyFilter', currencyFilter);
Vue.filter('timeFilter', timeFilter);
Vue.filter('durationFilter', durationFilter);
Vue.use(requestPlugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
