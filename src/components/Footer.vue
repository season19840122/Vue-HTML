<template>
  <div class="footer-wrap" v-cloak>
    <div class="footer">
      <div class="glmall-footer-group">
      <div class="glmall-footer">
        <p>©2019 杭州古泊林网络科技有限公司 版权所有</p>
        <p class="p2">
          <a href="http://www.miibeian.gov.cn" target="_blank"><img src="@images/f1.png">经营性网站备案信息</a>
          <a href="http://www.cyberpolice.cn/wfjb/" target="_blank"><img src="@images/f2.png">网络警察</a>
          <a href="https://www.alipay.com" target="_blank"><img src="@images/f3.png">支付宝特约商户</a>
          <a href="#" target="_blank"><img src="@images/f4.png">安全联盟</a>
          <a href="#" target="_blank"><img src="@images/f5.png">中国文化部</a>
          <a href="https://v.pinpaibao.com.cn/authenticate/cert/?site=www.51ux.com&amp;at=realname#" target="_blank"><img src="@images/f6.png"></a>
        </p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    };
  }
};
</script>

<style scoped lang="scss">
  .footer-wrap {
    // min-width: 1200px;
    // background: #282725;
    // border-top: 1px solid #33363d;
    .footer {
      // padding-top: 20px;
      // padding-bottom: 20px;
      // text-align: center;
      // clear: both;
      // min-width: 1200px;
      // font-size: 12px;
      // line-height: 20px;
      // color: #8b8f96;
      .glmall-footer-group {
          background-color: #1A1A1A;
          padding: 30px 0;
          min-width: 1200px;
          font-size: 12px;
          color: #808080
      }

      .glmall-footer-group .glmall-footer {
          width: 1200px;
          margin: 0 auto;
          text-align: center
      }

      .glmall-footer-group a {
          color: #808080;
          margin-left: 20px
      }

      .glmall-footer-group img {
          vertical-align: middle;
          margin-right: 10px
      }

      .glmall-footer-group .p2 {
          margin-top: 10px
      }
    }
  }
</style>
