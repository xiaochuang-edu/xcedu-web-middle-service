const Router = require('@koa/router')

const service = require('./service')

const router = new Router()

router.get('/sites/:siteId/config', async ctx => {
  ctx.body = await service.loadSiteConfig(ctx.params.siteId)
})

router.get('/sites/config/findByName', async ctx => {
  ctx.body = await service.loadSiteConfigbyName(ctx.query.siteName)
})

module.exports = router
