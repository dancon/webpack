const Car = require('./Car')

const myCar = new Car()

myCar.hooks.accelerate.intercept({
  call: speed => {
    console.log('Car accelerate hook is called')
  },
  tap: (tapinfo) => {
    console.log('tap a plugin for accelerate hook', JSON.stringify(tapinfo, null, '  '))
  },
  register: (tapinfo) => {
    console.log('register', JSON.stringify(tapinfo, null, '  '))
    const originFn = tapinfo.fn
    const originName = tapinfo.name
    return {
      ...tapinfo,
      name: `${originName}-change`,
      fn (...args) {
        console.log('I can change it.')
        originFn(...args)
      }
    }
  }
})

myCar.hooks.accelerate.tap('LoggerPlugin', newSpeed => {
  console.log(`Accelerating to ${newSpeed}`)
})

myCar.setSpeed()