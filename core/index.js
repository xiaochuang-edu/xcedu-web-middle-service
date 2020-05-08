const fs = require('fs')
const { resolve } = require('path')
const Router = require('@koa/router')

const router = new Router()

const hasRouter = filename => {
  const controllerFilePath = resolve(__dirname, filename, 'controller.js')

  return fs.existsSync(controllerFilePath)
}

fs.readdirSync(__dirname).forEach(filename => {
  if (hasRouter(filename)) {
    const controller = require(`./${filename}/controller`)
    if (filename !== 'render') {
      router.use('/api/v1', controller.routes()).use(controller.allowedMethods())
    } else {
      router.use(controller.routes()).use(controller.allowedMethods())
    }
  }
})

module.exports = router
