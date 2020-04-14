module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ["last 5 version", "not ie <= 8"],
      //是否美化属性值 默认：true
      cascade: true,
      //是否去掉不必要的前缀 默认：true
      remove: true
    }),
    // 只针对移动端，鱼和熊掌不可兼得
    // require('postcss-px-to-viewport')({
    //   viewportWidth: 750, 
    //   unitPrecision: 5,
    //   viewportUnit: 'vw', 
    //   selectorBlackList: [], 
    //   minPixelValue: 1, 
    //   mediaQuery: false
    // })
  ]
}