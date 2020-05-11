const Router = require('@koa/router')

const router = new Router()

router.get('/users/current', async ctx => {
  ctx.body = {
    code: 0,
    user: {
      id: 'dd3a70e928414a399096ebf10b45a15d',
      account: 'chejian2',
      username: '江成',
      avatar: 'http://gtyz.xiaochuang.com:8499/45f3cad57266437e9dd0344ab3c21a46/f5b25f5651c940c888b2a43499780c12.jpg',
      role: 'ADMIN'
    },
    profile: {
      layout: 'standalone',
      theme: 'blue'
    }
  }
})

module.exports = router
