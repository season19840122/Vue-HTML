module.exports = {
  HTMLDirs: [{
    js: 'bargame', // js name & 文件目录名
    filename: '网吧电竞赛', // file name
    title: '网吧电竞赛' // page title
  }],
  publicPath: './', // 本地相对路径
  // publicPath: '//gact.swjoy.com/ccel/', // 正式静态资源域名
  devServerOutputPath: '../dist',
  // cssOutputPath: 'res/seller/css', // 生成的目录要是相对路径
  // jsOutputPath: 'res/seller/js',
  // imgOutputPath: 'res/seller/img',
  cssOutputPath: 'css', // 没修改之前的配置
  jsOutputPath: 'js',
  imgOutputPath: '../img',
  fontOutputPath: 'font',
};

// url: 
// http://localhost:8080/网吧电竞赛.html
// http://10.141.3.136:8080/网吧电竞赛.html
