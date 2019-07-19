// ------------------------------------------------------------------------------
// name: vue.config.js
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2019/4/23 21:00
// ------------------------------------------------------------------------------

const path = require('path');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const isDebug = process.env.NODE_ENV === 'development';

function resolve(...dir) {
  return path.join(__dirname, ...dir);
}

module.exports = {
  publicPath: isDebug ? '/' : './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,

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

  configureWebpack: {

    // entry: resolve('src/main.js'),

    // 不分割任何模块
    optimization: {
      splitChunks: false
    },

    // 排除 'element-ui'
    externals: [{
      vue: 'Vue',
      'element-ui': 'ElementUI'
    }],

    // 输出设置
    // output: {
    //   filename: '[name].js',
    //   chunkFilename: '[name].[contenthash:8].js'
    // },

    // 复制插件
    plugins: [
      new HappyPack({
        id: 'happyBabel',
        loaders: [{ loader: 'babel-loader?cacheDirectory=true' }],
        threadPool: happyThreadPool
      })
    ]
  },

  // css: {
  //   publicPath: ['assets', 'demo']
  // },

  chainWebpack: (config) => {

    config.output.filename('static/js/[name].js');

    // 增加资源识别路径（仍然不支持 style="background: url()" 的路径识别）
    config.module.rule('file').include.add('/demo/assets');

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
