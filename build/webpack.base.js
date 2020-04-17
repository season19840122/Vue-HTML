const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./config'); // 多页面的配置项
let HTMLPlugins = [];
let Entries = {};

config.HTMLDirs.forEach(item => {
  let filename = `${item.filename}.html`;
  if (item.dir) filename = `${item.dir}/${item.filename}.html`;
  const htmlPlugin = new HTMLWebpackPlugin({
    publicPath: config.publicPath, //生成 publicPath
    title: item.title, // 生成的 html 页面的标题
    filename: filename, // 生成到 dist 目录下的 html 文件名称，支持多级目录（eg: `${item.page}/index.html`）
    template: path.resolve(__dirname, `../src/pages/${item.js}/index.html`), // 模板文件，不同入口可以根据需要设置不同模板
    chunks: [item.js, 'vendor'], // html 文件中需要要引入的 js 模块，这里的 vendor 是 webpack 默认配置下抽离的公共模块的名称
  });
  HTMLPlugins.push(htmlPlugin);
  Entries[item.js] = path.resolve(__dirname, `../src/pages/${item.js}/index.js`); // 根据配置设置入口 js 文件
});
// console.log(Entries);

const env = process.env.BUILD_MODE.trim();
let ASSET_PATH = '/'; // dev 环境
if (env === 'prod') ASSET_PATH = config.publicPath;  // build 时设置成实际使用的静态服务地址：dungeon, pubg

module.exports = {
  entry: Entries,
  output: {
    publicPath: ASSET_PATH,
    // filename: 'js/[name].[hash:8].js',
    filename: `${config.jsOutputPath}/[name].js`,
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 处理 vue 模块
        use: 'vue-loader',
      },
      {
        test: /\.js$/, //处理 es6 语法
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: { // 设置模块如何被解析
    alias: {
      '@public': path.resolve(__dirname, '../public'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@images': path.resolve(__dirname, '../src/assets/images'),
      '@scripts': path.resolve(__dirname, '../src/scripts'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@vuex': path.resolve(__dirname, '../src/store'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@commons': path.resolve(__dirname, '../src/commons'),
      // webpack 使用 jQuery，如果是自行下载的
      // 'jquery': path.resolve(__dirname, '../src/scripts/lib/jquery.min'),
      // 如果使用 NPM 安装的 jQuery
      'jquery': 'jquery',
      // 默认 NPM 包导出的是运行时构建，就是 vue.common.js，不包括 template 功能，为了使用独立构建，添加如下别名
      'vue': 'vue/dist/vue.js'
    },
    extensions:['.css','.js','.vue']
  },
  plugins: [
    ...HTMLPlugins, // 利用 HTMLWebpackPlugin 插件合成最终页面
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist'),
        ignore: ['*.html'] // mock 数据打包的时候也删掉
      },
      // {
      //   from: path.resolve(__dirname, '../src/scripts/lib'), // 搬运本地类库资源
      //   to: path.resolve(__dirname, '../dist')
      // }
    ]),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH) // 利用 process.env.ASSET_PATH 保证模板文件中引用正确的静态资源地址
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
