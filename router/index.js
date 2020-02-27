const Router = require('@koa/router')

const config = require('../config/routes.json')
const routes = require('./routes')

const router = new Router()

config.forEach(item => {
  const nestedRouter = routes(item)

  const args = [nestedRouter.routes(), nestedRouter.allowedMethods()]

  if (item.prefix) {
    args.unshift(item.prefix)
  }

  router.use.apply(router, args)
})

module.exports = router
