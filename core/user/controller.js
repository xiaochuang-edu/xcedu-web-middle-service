const Router = require('@koa/router')
const service = require('./service')
const { ACCESS_DENINED } = require('../constants/ERROR_CODE')

const router = new Router()

router.post('/user/login', async ctx => {
  const { username, password } = ctx.request.body

  const accessToken = await service.login(username, password)
  if (accessToken) {
    ctx.body = { code: 0, accessToken }
  } else {
    ctx.throw(401, 'username or password not correct!', { errCode: ACCESS_DENINED })
  }
})

module.exports = router
