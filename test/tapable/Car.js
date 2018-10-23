const { SyncHook, AsyncParallelHook } = require('tapable')

class Car {
  constructor () {
    this.hooks = {
      accelerate: new SyncHook(['newSpeed']),
      break: new SyncHook(),
      calculateRoutes: new AsyncParallelHook(['source', 'target', 'routesList'])
    }
  }

  setSpeed (speed = 1000) {
    this.hooks.accelerate.call(speed)
  }
}

module.exports = Car