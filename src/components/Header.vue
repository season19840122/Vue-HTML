<template>
  <div class="header-wrap">
    <div class="header">
        <div class="top-bar-group">
        <div class="top-bar"> 
          <!-- 登录前-->
          <!-- <div class="user-box" v-if="isLogin">Hi，欢迎来到5866商城<a href="#">登录</a></div> -->
          <!-- 登录后-->
          <div class="user-box">
            <template v-if="user.tel">
              Hi，<span class="user" href="#">{{ user.tel }}</span><a :href="currentURL.index">退出</a>
            </template>
          </div>
          <!-- <div class="nav"><a href="#">购买金币</a><a href="#">我的订单</a></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Header',
  data () {
    return {
      // isLogin: false
    };
  },
  computed: {
    ...mapGetters(['currentURL', 'user'])
  },
  methods: {

  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
  .header-wrap {
    // height: 60px;
    // line-height: 60px;
    // background: #fff;
    .header {
      // @include center;
      // position: relative;
      // height: 100%;
      .top-bar-group {
        background-color: #333333;
        color: #c9c9c9;
        line-height: 36px;
        font-size: 12px;
        min-width: 1200px;
        a {
          color: #c9c9c9;
          transition: color 200ms;
          &:hover {
            color: #fff
          }
        }
        .top-bar {
          width: 1200px;
          margin: 0 auto;
          overflow: hidden;
        }
        .user-box {
          float: left;
          &:before {
            content: '';
            width: 14px;
            height: 14px;
            display: inline-block;
            vertical-align: -1px;
            background: url(~@images/icon_top_home.png) no-repeat 0 0;
            margin-right: 10px;
          }
          a {
            margin-left: 15px;
          }
          .user {
            margin: 0;
            color: #ffffff;
            &:hover {
              color: #fff;
            }
          }
        }
        .nav {
          float: right;
          a {
            margin-left: 23px;
            position: relative;
            &:after {
              content: '';
              border-left: 1px solid #515151;
              height: 11px;
              position: absolute;
              right: -11px;
              top: 3px;
            }
          }
        }
      }
    }
  }
</style>
