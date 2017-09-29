#!/usr/bin/env node

/**
 * 使用项目本地的 webpack 代替全局的 webpack
 * 
 * 如果你执行过 npm i -g webpack
 * 然后又在自己的项目中执行了 npm i webpack 那么， 项目中的 webpack 将替代全局的 webpack
*/

// NOTE: 仿写的时候使用 node 8, 所以讲使用 ES6 的语法
const path = require('path')

console.log('this is a fake webpack...')
try{
    let localWebpack = require.resolve(path.join(process.cwd(), 'node_modules', 'fake-webpack', 'bin', 'webpack.js'))
    console.log('local webpack:', localWebpack, 'filename:', __filename)
    // 比较全局路径与本地是否一致，如果不一致，则使使用本地
    if(__filename !== localWebpack){
        return require(localWebpack)
    }
}catch(e){
    console.log('error happend...')
}