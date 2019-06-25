module.exports = {
  HTMLDirs: [
    {
      js: 'bargame', // js name & 文件目录名
      filename: '网吧电竞赛', // file name
      title: '网吧电竞赛' // page title
    },
    {
      js: 'bargame2', // js name
      filename: '网吧电竞赛2', // file name
      title: '网吧电竞赛2' // page title
    }
  ],
  publicPath: '/', // 本地测试
  // publicPath: '//static.51ux.com/show/', // 正式静态资源域名
  devServerOutputPath: '../dist',
  // cssOutputPath: 'res/seller/css', // 生成的目录要是相对路径
  // jsOutputPath: 'res/seller/js',
  // imgOutputPath: 'res/seller/img',
  cssOutputPath: 'css', // 没修改之前的配置
  jsOutputPath: 'js',
  imgOutputPath: 'img',
  // imgOutputPath: '//static.gameboxmall.com/show/lolskin/img', // 配合 NProxy 图片；路径测试
  fontOutputPath: 'font',
};

// url: http://localhost:8080/网吧电竞赛.html