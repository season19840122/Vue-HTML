<template>
  <div class="nav-wrap">
    <div class="nav">
      <span class="f1">首页</span>
      <template v-for="(item, index) in currentCaption">
        <span class="f2">&gt;</span>
        <span class="f3" :key="index">{{ item }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Nav',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['currentCaption'])
  },
  methods: {
  
  },
  mounted() {

  }
};
</script>

<style scoped lang="scss">
.nav-wrap {
  height: 52px;
  line-height: 52px;
  .nav {
    @include center;
    .f1 {
      color: #909192;
    }
    .f3 {
      color: #666666;
    }
  }
}
</style>
