const Router = require('@koa/router')

const router = new Router()

router.post('/send/verify/code', async ctx => {
  ctx.status = 204
})

module.exports = router
