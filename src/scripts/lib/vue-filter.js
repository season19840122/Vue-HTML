import Vue from 'vue';
import common from '@scripts/lib/common';

(function () {
  var filters = {
    num (value) {
      return value.replace(/[^\d]/g, '');
    },
    saveTwoDigit (value) {
      return common.utils.saveDigit(value, 2);
    },
    formatPhone(value) {
      return common.utils.formatPhone(value);
    }
  };
  
  // 注册所有过滤函数
  Object.keys(filters).forEach(function (key) {
    Vue.filter(key, filters[key]);
  });
  
})(Vue);
