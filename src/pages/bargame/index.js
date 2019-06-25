// 框架库部分
import 'es6-promise/auto'; // 最优先引用的，否则 IE 会报没有 promise
import '@styles/lib/base.scss';
import '@styles/lib/common.scss';
import './bargame.scss';
import Vue from 'vue';
import { DatePicker, Pagination } from 'ant-design-vue';
// import Cookies from 'js-cookie';
// 逻辑部分
// 独立成一个文件，或者放在 common 里
// import axios from '@scripts/lib/axios/json'; // 本地
import axios from '@scripts/lib/axios/interface'; // 线上
import common from '@scripts/lib/common';
import '@scripts/lib/vue-filter';
// import Tpl from './index.vue';
// IE polyfill
import '@babel/polyfill';
Object.setPrototypeOf = require('setprototypeof');

Vue.config.productionTip = false;
Vue.use(DatePicker);
Vue.use(Pagination);

// 全局挂载
window.$ = $;
window.axios = axios;
window.common = common;
// window.Cookies = Cookies;

new Vue({
  // router,
  // store,
  data(){
    return {
      a: 'it\'s a',
      b: 'it\'s b',
      c: 'it\'s c',
    };
  },
  methods: {
    init(){
      // alert(1)
    }
  },
  mounted() {
    this.init();
  },
}).$mount('#app');

// new Vue({
//   // render: h => h(Tpl),
//   data(){
//     return {

//     };
//   }
// }).$mount('#app');
