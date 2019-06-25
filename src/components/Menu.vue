<template>
  <div class="menu-wrap">
    <div class="menu">
      <ul>
        <li v-for="(item, index) in menu" :key="index" :class="{ active: index === thisIndex }">
          <a :href="item.url" class="menu-item" :index="index" @click="handleClick(index)">
            <span class="menu-name">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Menu',
  data() {
    return {
      menu: []
    };
  },
  computed: {
    ...mapGetters(['thisIndex', 'currentURL'])
  },
  methods: {
    ...mapActions(['getThisIndex']),
    // 点击
    handleClick(index){
      this.getThisIndex(index);
    },
    // 获得 Menu
    getMenu() {
      this.menu = [
        {
          name: '订单管理',
          url: this.currentURL.order
        },
        {
          name: '资金管理',
          url: this.currentURL.cash
        },
        {
          name: '提现管理',
          url: this.currentURL.manage
        }
      ];
    },
    init(){
      this.getMenu();
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.menu-wrap {
  .menu {
    width: 200px;
    height: 665px;
    padding-top: 15px;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    @include bs;
    ul {
      li {
        height: 42px;
        line-height: 42px;
        color: #909192;
        cursor: pointer;
        &.active {
          color: #333333;
          // background: #f8f8f8;
          .menu-item {
            display: block;
            height: 42px;
            position: relative;
            color: #333333;
          }
        }
        .menu-item {
          display: block;
          text-indent: 30px;
          color: #909192;
          .menu-name {
            height: 42px;
            line-height: 42px;
          }
        }
      }
    }
  }
}
</style>
