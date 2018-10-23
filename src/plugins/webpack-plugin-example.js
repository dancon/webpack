/**
 * @fileoverview webpack plugin 开发学习
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-10-23 | sizhao
 */

class WebpackPluginExample {
  apply (compiler) {
    compiler.hooks.entryOption.tap('example plugin', () => {
      console.log('entryOption')
    })
    compiler.hooks.emit.tapAsync('hello world webpack plugin', (compilation, callback) => {
      console.log('This is an example webpack plugin.')
      let filelist = '# In this build:\n\n'

      for (const filename in compilation.assets) {
        filelist += `- ${filename}\n`
      }

      compilation.assets['filelist.md'] = {
        source () {
          return filelist
        },
        size () {
          return filelist.length
        }
      }

      callback()
    })
  }
}

module.exports = WebpackPluginExample