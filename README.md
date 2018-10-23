# webpack

仿写 webpack 以阅读 webpack 源码

## compiler 编译器

`Compiler` 继承自 `Tapable`， 用以注册于调用插件，所有面向用户的插件都是首先注册到 `compiler` 上。

## compilation 编译/构建实例

`Compilation` 也是继承自 `Tapable`

每次构建是的对象实例，比如在 watch 模式下，每次文件的便跟都会触发 webpack 的重新构建，每次构建，都会由对应的 compiler 新建一个 compilation.

compilation 有对此次构建所输入与产出文件的所有访问权限（可以增删改）

### Tapable