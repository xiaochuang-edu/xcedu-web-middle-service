const Router = require('@koa/router')

const render = require('./render/controller')
const user = require('./user/controller')
const site = require('./sites/controller')
const siteConfig = require('./siteconfig/controller')

// require('./createTable')

const router = new Router()

router.use(render.routes()).use(render.allowedMethods())

router.use('/api/v1', user.routes()).use(user.allowedMethods())

router.use('/api/v1', site.routes()).use(site.allowedMethods())
router.use('/api/v1', siteConfig.routes()).use(siteConfig.allowedMethods())

module.exports = router
