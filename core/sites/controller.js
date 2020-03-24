const Router = require('@koa/router')

const service = require('./service')

const router = new Router()

router.get('/sites/find', async ctx => {
  ctx.body = await service.findSiteByName(ctx.query.siteName)
})

router.get(['/sites/:id', /\/sites\/([0-9a-z]{32})/], async ctx => {
  ctx.body = await service.findSiteById(ctx.params.id)
})

module.exports = router
