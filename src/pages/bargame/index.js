// 框架库部分
import 'es6-promise/auto'; // 最优先引用的，否则 IE 会报没有 promise
import './m-bargame.scss';
import Vue from 'vue';
// import { DatePicker, Pagination } from 'ant-design-vue';
// import Cookies from 'js-cookie';
// 逻辑部分
// 独立成一个文件，或者放在 common 里
// import axios from '@scripts/lib/axios/json'; // 本地
import axios from '@scripts/lib/axios/interface'; // 线上
// import axios from '@scripts/lib/axios/interface-jsonp'; // 线上 JSONP
import common from '@scripts/lib/common';
import '@scripts/lib/vue-filter';
// import Tpl from './index.vue';
// IE polyfill
import '@babel/polyfill';
Object.setPrototypeOf = require('setprototypeof');

// Vue.config.productionTip = false;
// Vue.use(DatePicker);
// Vue.use(Pagination);

// 全局挂载
window.$ = $;
window.axios = axios;
window.common = common;
// window.Cookies = Cookies;

var bargame = {
  isHuoma(nAppId,sourceId) {
    try {
      window.external.startApp(nAppId, sourceId);
      app.showMessage();
    } catch (e) {
      app.currentModal = 'huoma';
    }
  },
  isOther(nAppId,sourceId) {
    try {
      window.external.startApp(nAppId, sourceId);
      app.showMessage();
    } catch (e) {
      app.currentModal = 'cga';
    }
  }
};

var app = new Vue({
  // router,
  // store,
  data() {
    return {
      live: [],
      news: [],
      newsNoPic: [],
      tabs: [{
        cls: 'lol',
        name: '英雄联盟'
      },
      {
        cls: 'dota',
        name: '多多自走棋'
      },
      {
        cls: 'dgm',
        name: '数码宝贝（WAR3 RPG）'
      }
      ],
      types: [
        '全国总决赛',
        '大区总决赛'
      ],
      games: [
        '英雄联盟',
        '多多自走棋',
        '数码宝贝（WAR3 RPG）'
      ],
      units: [
        {
          url: 'http://www.xinhuanet.com/esports/',
          src: 'xhw.png'
        },
        {
          url: 'https://www.shunwang.com/',
          src: 'sw.png'
        },
        {
          url: 'http://www.600633.cn/',
          src: 'zswh.png'
        },
        
        {
          url: 'http://www.huoma.cn/',
          src: 'hm.png'
        },
        {
          url: 'http://www.cga.com.cn',
          src: 'hf.png'
        },
        {
          url: 'http://es.cga.com.cn/',
          src: 'cga.png'
        },
        {
          url: 'https://www.5211game.com/',
          src: 'yy.png'
        },
        {
          url: 'http://dragonest.com/',
          src: 'ly.png'
        },
        {
          url: 'http://www.10086.cn/index/zj/index_571_571.html',
          src: 'zgyd.png'
        },
        {
          url: 'https://yangba.syoogame.com/',
          src: 'yx.png'
        },
        {
          url: 'https://games.sina.com.cn/',
          src: 'sinagame.png'
        },
        {
          url: 'https://www.yuelun.com/',
          src: 'yl.png'
        },
      ],
      newsIndex: 0,
      tabIndex: 0,
      bonusIndex: 0,
      anchorIndex: 0,
      tabClass: 'lol',
      zone: 'qg',
      game: 'lol',
      modal: [{
        name: '英雄联盟',
        text: '英雄联盟项目可通过<span class="c1">火马电竞平台</span>报名，确定后将为您启动客户端进行组队参赛。入遇本网吧未安装客户端的情况，请联系网管。',
        logo: 'lol.png',
      },
      {
        name: '多多自走棋',
        text: '多多自走棋及数码宝贝（WAR3 RPG）可通过<span class="c1">CGA网吧专版平台</span>报名，确定后将为您启动客户端进行报名参赛。如遇本网吧未安装客户端的情况，请联系网管。',
        logo: 'dota.png',
      },
      {
        name: '数码宝贝',
        text: '多多自走棋及数码宝贝（WAR3 RPG）可通过<span class="c1">CGA网吧专版平台</span>报名，确定后将为您启动客户端进行报名参赛。如遇本网吧未安装客户端的情况，请联系网管。',
        logo: 'dgm.png',
      }
      ],
      logoIndex: 0,
      mask: null,
      currentModal: null,
      message: null
    };
  },
  methods: {
    newsClick(index) {
      this.newsIndex = index;
    },
    patternClick(index, item) {
      this.tabIndex = index;
      this.tabClass = item.cls;
    },
    bonusClick(index) {
      this.bonusIndex = index;
      if (index === 1) return this.zone = 'dq';
      this.zone = 'qg';
    },
    selectGames(event) {
      // this.bonusIndex = 0;
      // this.zone = 'qg';
      var index = event.target.selectedIndex;
      if (index === 1) return this.game = 'dota';
      if (index === 2) return this.game = 'dgm';
      this.game = 'lol';
    },
    clickAnchor(index) {
      this.anchorIndex = index;
    },
    showModal() {
      this.mask = true;
      this.currentModal = 'apply';
    },
    closeModal(callBack) {
      this.mask = false;
      this.currentModal = null;
      if (typeof callBack === 'function') callBack();
    },
    showMessage() {
      this.message = true;
      var flag = window.setTimeout(() => {
        this.message = false;
        window.clearTimeout(flag);
      }, 5000);
    },
    clickGame(index) {
      this.logoIndex = index;
    },
    handleApply(index) {
      this.isClient(index);
    },
    isClient(index) {
      if (index === 0) {
        // 调起火马客户端，火马 gameId =17275
        // 测试
        //bargame.isHuoma(13216);
        bargame.isHuoma(17275, 0);
        return;
      }
      // 调起火马客户端，CGA gameId = 19638
      //bargame.isHuoma(13216);
      bargame.isOther(19638, 0);
    },
    initLive() {
      // 直播
      axios.live({
        type: 9
      }).then(res => {
        // console.log(res);
        if(res) {
          this.live = res.slice(0,4);
        } else {
          console.error(err.message);
        }
      });

      // 新闻
      axios.news({
        type: 10
      }).then(res => {
        // console.log(res);
        if(res) {
          this.news = res.slice(0,4);
          this.newsNoPic = res.slice(4,10);
        }else {
          console.error(err.message);
        }
      });

      /* // 直播 JSONP
      axios.live((err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          this.live = data.slice(0,4);
          // return console.log(data);
        }
      });

      // 新闻 JSONP
      axios.news((err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          this.news = data.slice(0,4);
          this.newsNoPic = data.slice(4,10);
        }
        // return console.log(data);
      }); */
    },
    init() {
      this.initLive();
    }
  },
  mounted() {
    this.init();
  },
}).$mount('#app');
