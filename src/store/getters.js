const getters = {
  thisIndex: state => state.app.thisIndex,
  currentCaption: state => state.app.currentCaption,
  currentModal: state => state.app.currentModal,
  currentURL: state => state.app.currentURL,
  user: state => state.app.user,
  failMsg: state => state.app.failMsg,
  orderList: state => state.app.orderList,
  detailList: state => state.app.detailList,
  cashList: state => state.app.cashList,
  orderInfo: state => state.app.orderInfo,
  detailInfo: state => state.app.detailInfo,
  cashInfo: state => state.app.cashInfo,
  page: state => state.app.page,
  amountDeail: state => state.app.amountDeail
};
export default getters;
