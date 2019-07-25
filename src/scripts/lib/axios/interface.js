import axios from './axios';
// import jsonp from './jsonp';

/**
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

/* 首页 */
// 直播
const live = data => {
  return axios({
    method: 'post',
    url: 'https://client.huoma.cn/sysNotice/listNotice',
    params: data
  });
};

// 新闻
const news = data => {
  return axios({
    method: 'post',
    url: 'https://client.huoma.cn/sysNotice/listNotice',
    params: data
  });
};

// 默认全部导出
export default {
  live,
  news
};

