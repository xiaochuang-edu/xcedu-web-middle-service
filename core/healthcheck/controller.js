const Router = require('@koa/router')

const router = new Router()

router.get('/healthcheck', async ctx => {
  ctx.body = 'OKOKOK'
})

module.exports = router
