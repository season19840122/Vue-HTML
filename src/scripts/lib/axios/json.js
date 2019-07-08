// import axios from './axios';
import jsonp from './jsonp';

/**
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
/* export const list = id => {
  return axios({
    url: `/list${id}`,
    method: 'get'
  })
}

export const upload = data => {
  return axios({
    url: '/upload',
    method: 'post',
    data
  })
} */

/* 首页 */
// 直播
const live = callback => {
  return jsonp({
    url: '/mock/live.json',
    jsonpName: 'live',
    callback
  });
};

// 资讯
const news = callback => {
  return jsonp({
    url: '/mock/news.json',
    jsonpName: 'news',
    callback
  });
};

// 默认全部导出
export default {
  live,
  news
};
