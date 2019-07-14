// ------------------------------------------------------------------------------
// name: vue.config.js
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2019/4/23 21:00
// ------------------------------------------------------------------------------

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// const isDebug = process.env.NODE_ENV === 'development';

function resolve(...dir) {
  return path.join(__dirname, ...dir);
}

module.exports = {
  productionSourceMap: false,

  configureWebpack: {

    entry: resolve('src/main.js'),

    // 不分割任何模块
    optimization: {
      splitChunks: false
    },

    // 调试配置
    devServer: {
      // 跨域配置
      proxy: {
        '/api': {
          target: 'http://172.16.31.16:8080',
          pathRewrite: { '^/api': '' },
          changeOrigin: true,
          secure: false
        }
      }
    },

    // 排除 'element-ui'
    externals: [{
      Vue: 'vue',
      ElementUI: 'element-ui'
    }],

    // 输出设置
    output: {
      filename: '[name].js',
      chunkFilename: '[name].[contenthash:8].js'
    },

    // 复制插件
    plugins: [
      // new CopyPlugin(['packages/readme.txt']),
      new HappyPack({
        id: 'happyBabel',
        loaders: [{ loader: 'babel-loader?cacheDirectory=true' }],
        threadPool: happyThreadPool
      })
    ]
  },

  chainWebpack: (config) => {

    // 后缀名的省略识别：Set { '.mjs', '.js', '.jsx', '.vue', '.json', '.wasm' }
    config.resolve.extensions.add('scss');

    // 路径别名
    config.resolve.alias.set('@', resolve('src'));
    config.resolve.alias.set('demo', resolve('demo'));
    config.resolve.alias.set('dodui', resolve('packages'));

    // 不生成 html
    // config.plugins.delete('html');
    // config.plugins.delete('preload');
    // config.plugins.delete('prefetch');

  }
};
