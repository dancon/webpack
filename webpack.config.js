/**
 * @fileoverview webpack 配置文件
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-10-23 | sizhao
 */
const path = require('path')

const root = path.resolve()
const dist = path.resolve(root, 'dist')
const WebpackPluginExample = require('./src/plugins/webpack-plugin-example')

module.exports = {
  entry: './test/index.js',
  mode: 'development',
  output: {
    path: dist,
    filename: '[name].build.js'
  },
  plugins: [
    new WebpackPluginExample()
  ]
}