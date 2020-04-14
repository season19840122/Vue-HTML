import common from '@scripts/lib/common';

const app = {
  state: {
    // publicPath: '//127.0.0.1/',
    thisIndex: 0,
    currentCaption: '',
    // 线上
    currentURL: {
      index: `${localUrl}supplier/loginPage`,
      order: `${localUrl}supplier/order`,
      cash: `${localUrl}supplier/cash`,
      manage: `${localUrl}supplier/manage`,
      modify: `${localUrl}supplier/modify`,
      detail: `${localUrl}supplier/detail`
    },
    // 本地
    // currentURL: {
    //   index: 'http://hao123.com',
    //   order: './订单管理.html',
    //   cash: `./资金管理.html`,
    //   manage: './提现管理.html',
    //   modify: './提现账户.html',
    //   detail: './提现明细.html'
    // },
    user: {
      tel: common.business.getUser().tel
    },
    currentModal: '',
    failMsg: {},
    orderList: {},
    detailList: {},
    cashList: {},
    orderInfo: {
      status: '',
      page: 1,
      limit: 10
    },
    detailInfo: {
      page: 1,
      limit: 10
    },
    cashInfo: {
      page: 1,
      limit: 10
    },
    page: {
      flag: 0, // 0 代表订单列表，1 代表提现明细列表
      total: 10,
      currentPage: 1
    },
    amountDeail: {}
  },

  mutations: {
    m_thisIndex: (state, thisIndex) => {
      state.thisIndex = thisIndex;
    },
    m_currentCaption: (state, caption) => {
      state.currentCaption = caption;
    },
    m_currentModal: (state, modal) => {
      state.currentModal = modal;
    },
    m_failMsg: (state, failMsg) => {
      state.failMsg = failMsg;
    },
    m_orderList: (state, orderList) => {
      state.orderList = orderList;
    },
    m_detailList: (state, detailList) => {
      state.detailList = detailList;
    },
    m_cashList: (state, cashList) => {
      state.cashList = cashList;
    },
    m_orderInfo: (state, orderInfo) => {
      Object.keys(orderInfo).forEach(function (key) {
        state.orderInfo[key] = orderInfo[key];
      });
    },
    m_detailInfo: (state, detailInfo) => {
      Object.keys(detailInfo).forEach(function (key) {
        state.detailInfo[key] = detailInfo[key];
      });
    },
    m_cashInfo: (state, cashInfo) => {
      Object.keys(cashInfo).forEach(function (key) {
        state.cashInfo[key] = cashInfo[key];
      });
    },
    m_page: (state, page) => {
      Object.keys(page).forEach(function (key) {
        state.page[key] = page[key];
      });
    },
    m_amountDeail: (state, amountDeail) => {
      state.amountDeail = amountDeail;
    },
  },

  actions: {
    getThisIndex: ({ commit }, thisIndex) => {
      commit('m_thisIndex', thisIndex);
    },
    getCurrentCaption: ({ commit }, caption) => {
      commit('m_currentCaption', caption);
    },
    getCurrentModal: ({ commit }, modal) => {
      commit('m_currentModal', modal);
    },
    getFailMsg: ({ commit }, failMsg) => {
      commit('m_failMsg', failMsg);
    },
    getFailModal: ({ dispatch, commit }, failMsg) => {
      dispatch('getFailMsg', failMsg).then(() => {
        commit('m_currentModal', 'otherFail');
      });
    },
    getOrderList: ({ commit }, orderList) => {
      commit('m_orderList', orderList);
    },
    getDetailList: ({ commit }, detailList) => {
      commit('m_detailList', detailList);
    },
    getCashList: ({ commit }, cashList) => {
      commit('m_cashList', cashList);
    },
    getOrderInfo: ({ commit }, orderInfo) => {
      commit('m_orderInfo', orderInfo);
    },
    getDetailInfo: ({ commit }, detailInfo) => {
      commit('m_detailInfo', detailInfo);
    },
    getCashInfo: ({ commit }, cashInfo) => {
      commit('m_cashInfo', cashInfo);
    },
    getPage: ({ commit }, page) => {
      commit('m_page', page);
    },
    getAmount: ({ commit }, amountDeail) => {
      commit('m_amountDeail', amountDeail);
    }
  }
};

export default app;
