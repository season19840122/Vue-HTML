const path = require('path');
const webpackBase = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const config = require('./config');

module.exports = webpackMerge(webpackBase, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader', // 处理 vue 文件中的 css 样式
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [ // 这些 loader 会按照从右到左的顺序处理样式
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader', // 将定义的 sass 变量、mix 等统一样式打包到每个 css 文件中，避免在每个页面中手动引入
            options: {
              resources: path.resolve(__dirname, '../src/styles/lib/main.scss'),
            }
          }
        ]
      },
      {
        test: /\.(js|vue)$/,
        enforce: 'pre', // 强制先进行 ESLint 检查
        exclude: /node_modules|lib/,
        loader: 'eslint-loader',
        options: {
          // 启用自动修复
          fix: true,
          // 启用警告信息
          emitWarning: true,
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // 处理图片
        use: {
          loader: 'url-loader', // 解决打包 css 文件中图片路径无法解析的问题
          options: {
            // 打包生成图片的名字
            name: `${config.imgOutputPath}/[path][name].[ext]`,
            context: 'src/assets/images/',
            limit: 8192
            // 图片的生成路径
            // outputPath: config.imgOutputPath,
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // 处理字体
        use: {
          loader: 'file-loader',
          options: {
            // name: `${config.fontOutputPath}/[path][name].[hash:8].[ext]`,
            name: `${config.fontOutputPath}/[name].[ext]`
          }
        }
      },
      // {
      //   test: /\html$/, // 处理字体
      //   use: {
      //     loader: 'html-loader',
      //     // options: {
      //     //   attrs: [':data-src']
      //     // }
      //   }
      // }
    ]
  },
  devServer: {
    // contentBase: config.devServerOutputPath,
    host: '0.0.0.0', // 如果不配置成这个，默认只能是 localhost 和 127.0.0.1 能访问，用局域网 ip 是不能访问的，如：192.168.x.x
    inline: true,
    hot: true, // HMR 启用，文档还说必须有 webpack.HotModuleReplacementPlugin 才能完全启用 HMR，经测试没有也可以启用，不用在命令行里配置，在此配置也可以。
    proxy: {
      // 测试环境
      // '/': {
      //   target: 'http://yxb.51ux.com:8081', // 设置正式接口的域名和端口号
      //   secure: false,
      //   changeOrigin: true
      // },
      // 本地环境
      '/mock': {
        target: 'http://localhost:8080', 
      }
    }, 
    overlay: {
      errors: true,
      warnings: true,
    },
    // open: true // 服务启动后 打开浏览器
  }
});