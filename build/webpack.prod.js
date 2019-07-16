// 引入基础配置
const path = require('path');
const webpackBase = require('./webpack.base');
// 引入 webpack-merge 插件
const webpackMerge = require('webpack-merge');
// 清理 dist 文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
// js 压缩、优化插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 抽取 css extract-text-webpack-plugin 不再支持 webpack4，官方出了 mini-css-extract-plugin 来处理 css 的抽取
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require('./config'); // 多页面的配置项
const ASSET_PATH = config.publicPath; // 线上静态资地址

// 合并配置文件
module.exports = webpackMerge(webpackBase, {
  mode: 'production',
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, '../src/styles/lib/main.scss'),
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // 处理图片
        use: {
          loader: 'url-loader', // 解决打包 css 文件中图片路径无法解析的问题
          options: {
            // 打包生成图片的名字
            // name: `${config.imgOutputPath}/[path][name].[hash:8].[ext]`,
            name: `${config.imgOutputPath}/[path][name].[ext]`,
            context: 'src/assets/images/',
            limit: 8192,
            publicPath: ASSET_PATH + '../', // 相对路径 CSS 目录中的图片向上一层查找，与 config.js 中 publicPath 配合使用
            // publicPath: ASSET_PATH // 绝对路径
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // 处理字体
        use: {
          loader: 'file-loader',
          options: {
            name: `${config.fontOutputPath}/[name].[ext]`,
            publicPath: ASSET_PATH + '../', // 相对路径 CSS 目录中的图片向上一层查找，与 config.js 中 publicPath 配合使用
            // publicPath: ASSET_PATH // 绝对路径
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: { // 将所有来自 node_modules 的模块分配到一个叫 vendors 的缓存组
          test: /[\\/]node_modules[\\/]/,
          name: `vendor`,
          // maxSize: 200000,
          chunks: 'all'
        },
        // commons: {
        //   // async 设置提取异步代码中的公用代码
        //   chunks: 'async',
        //   name: 'commons-async',
        /**
         * minSize 默认为 30000
         * 想要使代码拆分真的按照我们的设置来
         * 需要减小 minSize
         */
        //   minSize: 0,
        //   // 至少为两个 chunks 的公用代码
        //   minChunks: 1
        // }
      }
    },
    minimizer: [
      new UglifyJsPlugin({ // 压缩 js
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: false,
            drop_console: true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({ // 压缩 css
        cssProcessorOptions: {
          safe: true
        }
      })
    ]
  },
  plugins: [
    // 自动清理 dist 文件夹
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..'),
      verbose: true, // 开启在控制台输出信息
      dry: false,
    }),
    new MiniCssExtractPlugin({
      // filename: 'css/[name].[chunkhash:8].css'
      filename: `${config.cssOutputPath}/[name].css`
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'server',
    //   analyzerHost: '127.0.0.1',
    //   analyzerPort: 8888,
    //   reportFilename: 'report.html',
    //   defaultSizes: 'parsed',
    //   openAnalyzer: true,
    //   generateStatsFile: false,
    //   statsFilename: 'stats.json',
    //   statsOptions: null,
    //   logLevel: 'info'
    // })
  ]
});
