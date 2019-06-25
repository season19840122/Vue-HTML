<template>
  <div class="modal-wrap">
    <div class="masklayer" v-if="mask || currentModal"></div>

    <!--成功-->
    <div class="dialog-wrap success" v-if="currentModal == 'manageSuccess'">
      <i class="i-close" @click="closeRefresh"></i>
      <div class="contents">
        <h3 class="caption">
          <i class="i-success"></i>
          提现申请已经提交成功！
        </h3>
        <p class="success">请耐心等待财务打款</p>
        <div class="btn-wrap">
          <button class="btn-go" @click="closeRefresh">确定</button>
        </div>
      </div>
    </div>

    <!--失败-->
    <div class="dialog-wrap fail" v-if="currentModal == 'manageFail'">
      <i class="i-close" @click="closeRefresh"></i>
      <div class="contents">
        <h3 class="caption">
          <i class="i-fail"></i>
          提现申请已经提交失败！
        </h3>
        <p class="fail">失败原因：系统异常，请联系客服！</p>
        <div class="btn-wrap">
          <button class="btn-go" @click="closeRefresh">确定</button>
        </div>
      </div>
    </div>

    <!--成功-->
    <div class="dialog-wrap success" v-if="currentModal == 'modifySuccess'">
      <i class="i-close" @click="closeRefresh"></i>
      <div class="contents">
        <h3 class="caption">
          <i class="i-success"></i>
          提现账户修改成功！
        </h3>
        <p class="success">下次提现将以最新的提现账户为准哦~</p>
        <div class="btn-wrap">
          <button class="btn-go" @click="closeRefresh">确定</button>
        </div>
      </div>
    </div>

    <!--失败-->
    <div class="dialog-wrap fail" v-if="currentModal == 'modifyFail'">
      <i class="i-close" @click="closeRefresh"></i>
      <div class="contents">
        <h3 class="caption">
          <i class="i-fail"></i>
          提现账户修改失败！
        </h3>
        <p class="fail">失败原因：系统异常，请联系客服！</p>
        <div class="btn-wrap">
          <button class="btn-go" @click="closeRefresh">确定</button>
        </div>
      </div>
    </div>
    
    <!-- 其他错误提示 -->
    <div class="dialog-wrap fail" v-if="currentModal == 'otherFail'">
      <i class="i-close" @click="closeModal"></i>
      <div class="contents">
        <h3 class="caption">
          <i class="i-fail"></i>
          {{ failMsg.message }}
        </h3>
        <div class="btn-wrap">
          <button class="btn-go" @click="closeModal">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'modal',
  data () {
    return {
      mask: null
    };
  },
  computed: {
    ...mapGetters(['currentModal', 'failMsg']),
  },
  methods: {
    ...mapActions([
      'getCurrentModal'
    ]),
    closeModal (callBack) {
      this.mask = false;
      this.getCurrentModal(null);
      if (typeof callBack == 'function') callBack();
    },
    closeRefresh(){
      this.closeModal();
      location.reload();
    }
  },
  mounted () {

  }
};
</script>

<style lang="scss">
  .modal-wrap {
    // 弹层
    .masklayer {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      background: #000;
      opacity: 0.5;
    }
    $w: 568px;
    $h: 515px;
    .dialog-wrap {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1001;
      border-radius: 2px;
      width: $w;
      // height: $h;
      @include br(5px);
      @include bs;
      &.one {
        width: 424px;
        // height: 260px;
        padding: 58px 18px 18px;
        .contents {
          padding: 0;
          padding-bottom: 18px;
          // height: 180px;
          background: #2a2627;
          border: 1px solid #000000;
          @include br;
          position: relative;
          padding-top: 50px;
          .img {
            position: absolute;
            left: 50%;
            top: -(78px/2);
            transform: translateX(-50%);
            width: 78px;
            height: 78px;
          }
          .text {
            text-align: center;
            .c2 {
              color: #ff4444;
            }
          }
        }
      }
      &.ten {
        width: 524px;
        // height: 536px;
        padding: 83px 18px 18px;
        .contents {
          padding: 0;
          min-height: 160px;
          background: #2a2627;
          border: 1px solid #000000;
          @include br;
          position: relative;
          .title {
            color: #333333;
            font-weight: bold;
            font-size: 18px;
            position: absolute;
            left: 50%;
            top: -(78px/2);
            transform: translateX(-50%);
          }
          .ul {
            padding-top: 10px;
            li {
              font-size: 16px;
              line-height: 30px;
              color: #aca6b1;
              text-align: center;
            }
          }
          .part {
            width: 100%;
            height: 105px;
            .btn-wrap {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 20px;
            }
          }
          .p1 {
            border-top: 1px solid #444444;
            color: #666666;
            font-size: 14px;
            text-align: center;
            padding-top: 10px;
            .c3 {
              color: #ffd038;
            }
          }
        }
      }
      &.weixin {
        width: 424px;
        height: 335px;
        padding: 83px 18px;
        .contents {
          padding: 0;
          position: relative;
          .title {
            color: #333333;
            font-weight: bold;
            font-size: 18px;
            position: absolute;
            left: 50%;
            top: -(78px/2);
            transform: translateX(-50%);
          }
          .p2 {
            font-size: 14px;
            text-align: center;
            margin-bottom: 20px;
          }
          .qrcode {
            width: 180px;
            height: 180px;
            margin: 0 auto;
            border: 2px solid #282425;
            @include br(2px);
            background: #ffffff;
            canvas {
              width: 176px;
              height: 176px;
            }
          }
        }
      }
      &.info {
        height: 200px;
        .contents {
          padding: 0;
          .p3 {
            margin-top: 60px;
            text-align: center;
            font-size: 16px;
          }
          .btn-wrap {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 20px;
          }
        }
      }
      &.keyCode{
        background: #0f1319;
        border: 1px solid #463714;
        width: 412px;
        font-size: 14px;
        .contents{
          color: #a19b8e;
          text-align: center;
          .p3{
            margin-bottom: 10px;
          }
          input{
            width: 334px;
            height: 40px;
            outline: none;
            border: none;
            background: #34393f;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            color: #cdbf91;
            padding: 0 5px;
          }
          .p4{
            margin-top: 10px;
          }
        }
        .i-close {
          // background: url(~@images/close-center.png) no-repeat;
          width: 13px;
          height: 13px;
          position: absolute;
          right: 8px;
          top: 8px;
          cursor: pointer;
        }
      }
      &.success, &.fail, &.info{
        background: #fff;
        width: 460px;
        height: 328px;
        text-align: center;
        i {
          display: block;
          margin: 0 auto 5px;
          width: 66px;
          height: 77px;
          &.i-success {
            background: url(~@images/i-success.png) no-repeat;
          }
          &.i-fail {
            background: url(~@images/i-fail.png) no-repeat;
          }
        }
        .success, .fail{
          font-size: 16px;
          word-break: break-all;
          color: #8d8e99;
        }
        .line{
          margin: 20px 0 20px 0;
          color: #5a5a56;
        }
        .i-close {
          background: url(~@images/close-btn.png) no-repeat;
          width: 13px;
          height: 13px;
          position: absolute;
          right: 8px;
          top: 8px;
          cursor: pointer;
          &:hover {
            background-position: 0 -14px;
          }
        }
        .btn-wrap{
          margin: 35px auto 0;
          button{
            display: inline-block;
            color: #212537;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            margin: 0 15px;
            border-radius: 2px;
            padding: 0 20px;
            &.btn-go{
              background-color: #FFD200;
              color: #333;
              &:hover{
                background-color: #ffda33;
              }
            }
            &.btn-get{
              background: #3b4653;
              color: #828588;
              &:hover{
                background: #445262;
                color: #9099a3;
              }
            }
          }
        }
      }
      .i-close {
        background: url(~@images/close-btn.png) no-repeat;
        width: 14px;
        height: 14px;
        position: absolute;
        right: 8px;
        top: 8px;
        cursor: pointer;
        &:hover {
          background-position: 0 -14px;
        }
      }
      .contents {
        padding: 40px 60px 60px;
        .caption {
          text-align: center;
          color: #212537;
          font-size: 24px;
        }
        .text {
          color: #333333;
          font-size: 14px;
          line-height: 1;
          margin-bottom: 15px;
          &.c1 {
            color: #aca6b1;
          }
        }
        .form-wrap {
          .formitem {
            @include cf;
            width: 340px;
            overflow: hidden;
            margin-bottom: 20px;
            .lbl {
              float: left;
              width: 96px;
              height: 34px;
              line-height: 34px;
              text-align: right;
              margin-right: 10px;
            }
            .ipt-text {
              width: 340px;
              height: 42px;
              line-height: 22px;
              padding: 10px;
              border: 1px solid #d9dade;
              @include br(2px);
              font-size: 14px;
              &.s {
                width: 220px;
              }
              &.m {
                width: 230px;
                height: 34px;
                line-height: 32px;
              }
            }
          }
        }
      }
      .text-wrap {
        li {
          line-height: 2;
        }
      }
      .btn-wrap {
        text-align: center;
      }
      .btn-sure {
        display: inline-block;
        width: 121px;
        height: 43px;
        line-height: 43px;
        color: #1e1b1c;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
</style>


