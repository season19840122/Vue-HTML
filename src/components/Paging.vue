<template>
  <div class="paging-wrap">
    <!-- :itemRender="itemRender" -->
    <a-pagination
      :defaultCurrent="1"
      :pageSize="pageSize"
      :total="page.total"
      v-model="page.currentPage"
      @change="onChange" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Paging',
  data () {
    return {
      pageSize: 10
    };
  },
  computed: {
    ...mapGetters(['page', 'orderInfo', 'detailInfo', 'cashInfo'])
  },
  methods: {
    ...mapActions(['getOrderList', 'getDetailList', 'getCashList', 'getOrderInfo', 'getDetailInfo', 'getCashInfo', 'getPage']),
    // itemRender (current, type, originalElement) {
    //   if (type === 'prev') {
    //     return <a class="pagePrev">上一页</a>;
    //   } else if (type === 'next') {
    //     return <a class="pageNext">下一页</a>;
    //   }
    //   return originalElement;
    // },
    // page
    onChange (currentPage) {
      // console.log('Page: ', currentPage)
      this.handleGetOrders(currentPage);
    },
    handleGetOrders (currentPage) {
      // this.getPage({
      //   currentPage: currentPage
      // });
      if(this.page.flag === 0) {
        this.getOrderInfo({
          page: currentPage
        });
        axios.orderList(this.orderInfo).then(res => {
          if(res && res.success) {
            this.getOrderList(res.data);
            // 分页
            let pageObj = {};
            pageObj['total'] = res.data.count;
            pageObj['currentPage'] = res.data.page;
            // pageObj['total'] = 100;
            // pageObj['currentPage'] = 5;
            this.getPage(pageObj);
          } else {
            this.getFailModal({
              message: res.message || '网络连接超时！'
            });
          }
        });
      } else if(this.page.flag === 1) { 
        this.getDetailInfo({
          page: currentPage
        });
        axios.list(this.detailInfo).then(res => {
          if(res && res.success) {
            let detaiList = res.data,
              arr = [];
            res.data.data.forEach((item) => {
              let list = item;
              let payType = item.payType,
                payAccount = item.payAccount.slice(0, 3) + item.payAccount.slice(2, -2).replace(/([\s\S]*)/, '******') + item.payAccount.slice(-2),
                payName = item.payName.replace(/([\s\S]*)/, '*') + item.payName.slice(-1);
              let arrivalAccount = `${payType}  ${payAccount}  ${payName}`;
              list.arrivalAccount = arrivalAccount;
              arr.push(list);
            });
            // console.log(arr);
            detaiList.data = arr;
            this.getDetailList(detaiList);
            // 分页
            let pageObj = {};
            pageObj['total'] = res.data.count;
            pageObj['currentPage'] = res.data.page;
            // pageObj['total'] = 100;
            // pageObj['currentPage'] = 5;
            this.getPage(pageObj);
          } else {
            this.getFailModal({
              message: res.message || '网络连接超时！'
            });
          }
        });
      } else {
        this.getCashInfo({
          page: currentPage
        });
        axios.page(this.cashInfo).then(res => {
          if(res && res.success) {
            let cashList = res.data.data;
            this.getCashList(cashList);

            // 分页
            let pageObj = {};
            pageObj['flag'] = 2;
            pageObj['total'] = res.data.count;
            pageObj['currentPage'] = res.data.page;
            this.getPage(pageObj);
          } else {
            this.getFailModal({
              message: res.message || '网络连接超时！'
            });
          }
        });
      }
    }
  }
};
</script>

<style lang="scss">
  .paging-wrap {
    text-align: center;
    margin-top: 30px;
    // .page-prev, .page-next {
    //   border: 1px solid #d9d9d9;
    //   background-color: #fff;
    // }
    // .pagination {
    //   display: inline-block;
    //   font-size: 14px;
    //   margin-top: 30px;
    //   li {
    //     cursor: pointer;
    //     float: left;
    //     height: 40px;
    //     line-height: 40px;
    //     text-align: center;
    //     margin-right: 8px;
    //     background: #ffffff;
    //     color: #212537;
    //     @include br(1px);
    //   }
    //   .page-item {
    //     width: 40px;
    //     &.active {
    //       background: #ffd200;
    //     }
    //   }
    //   .page-prev, .page-next {
    //     width: 80px;
    //   }
    //   .disabled {
    //     color: #c4c8cc;
    //     cursor: not-allowed;
    //     a {
    //       cursor: not-allowed;
    //     }
    //   }
    // }
  }
</style>
