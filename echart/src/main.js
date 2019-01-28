// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'

import axios from "./axiosconfig/index.js"

import echarts from 'echarts'
Vue.prototype.$echarts = echarts ;

import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
import echartsLiquidfill from 'echarts-liquidfill';
//highcharts的引入
import highcharts from 'highcharts'

import VueHighcharts from 'vue-highcharts';
 
Vue.use(VueHighcharts)
Vue.use(highcharts)

import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(highcharts)

import Charts from './components/Charts.vue';
Vue.component(Charts.name, Charts)

axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;
import api from './api/';
Vue.prototype.$api = api;



Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
